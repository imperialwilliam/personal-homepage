# OrbitLive 卫星实时追踪网页复刻 Spec

## Why
用户要求完美复刻 `https://jdeicsz4tkkae.kimi.page/`（即 "OrbitLive · 全球卫星实时追踪"）。该页面是一个基于 React 19 + Three.js + satellite.js SGP4 + CelesTrak TLE 数据的全屏 3D 卫星实时追踪应用，含地球渲染、8000+ 颗在轨卫星实时位置、星座分组、搜索、详情面板、时间倍速控制等。当前 `/workspace` 为空目录，需从零搭建一个在视觉与功能上 1:1 还原原站的 SPA。

## What Changes
- 新建 Vite + React 19 + TypeScript 工程
- 集成 Three.js（r163+）、satellite.js（SGP4）、Tailwind CSS
- 实现核心 3D 引擎：地球（5 层球体：表面/夜景/云层/大气辉光/无）、星空、卫星 Points（自定义 GLSL 着色器）、轨道线、地面覆盖圈、选中环
- 实现 TLE 数据加载（本地快照 + CelesTrak 在线同步）与解析
- 实现时间控制器（播放/暂停/1×–1000× 倍速/回到现在）
- 实现 HUD 覆盖层：加载动画、头部状态栏、搜索框、星座分组面板、详情面板、时间控制条、来源标注
- 实现 HTML 卫星标签覆盖层（ISS 永久 + 选中卫星）
- 实现交互：3D 点击选中、搜索选中、分组显隐、URL `?sel=<NORAD>` 深链
- 复用原站静态资产（TLE 快照、groups.json、5 张地球纹理），不再二次创作

## Impact
- 受影响 specs：无（全新工程，`/workspace` 当前为空）
- 受影响代码：全部为新增
  - `index.html`、`package.json`、`vite.config.ts`、`tsconfig.json`、`tailwind.config.js`、`postcss.config.js`
  - `src/main.tsx`、`src/App.tsx`、`src/pages/Home.tsx`
  - `src/components/Hud.tsx`、`src/components/LoadingOverlay.tsx`
  - `src/engine/Engine.ts`（3D 引擎主类）
  - `src/engine/time.ts`（时间控制器）
  - `src/engine/data.ts`（TLE 加载/解析/分组）
  - `src/engine/sun.ts`（太阳方向计算）
  - `src/engine/shaders.ts`（6 段 GLSL 着色器源码）
  - `src/engine/groups.ts`（10 个星座分组定义）
  - `public/data/tle-active.txt`、`public/data/groups.json`、`public/data/meta.json`
  - `public/textures/earth_atmos_2048.jpg`、`earth_normal_2048.jpg`、`earth_specular_2048.jpg`、`earth_lights_2048.png`、`earth_clouds_1024.png`
  - `src/index.css`（含 `.glass` / `.font-num` / `.sat-label` 自定义类）

## ADDED Requirements

### Requirement: 全屏 3D 地球场景
系统 SHALL 在视口全屏渲染一个 Three.js WebGL 场景，背景色 `#010208`，含以下 5 层共心的球体（地球半径归一化为 1.0 = 6371 km）：

1. **地球表面**：`SphereGeometry(1, 96, 72)`，`MeshPhongMaterial`，map=`earth_atmos_2048.jpg`，normalMap=`earth_normal_2048.jpg`（normalScale 0.85,0.85），specularMap=`earth_specular_2048.jpg`，specular=`#1D2F42`，shininess=24，colorSpace=SRGB，maxAnisotropy。
2. **夜景灯光**：`SphereGeometry(1.0012, 96, 72)`，自定义 ShaderMaterial（uniforms: `uMap`=earth_lights_2048.png, `uSunDir`, `uIntensity`=1.35），AdditiveBlending，depthWrite=false，transparent。
3. **云层**：`SphereGeometry(1.014, 64, 48)`，`MeshPhongMaterial` map=`earth_clouds_1024.png`，opacity=0.42，transparent，depthWrite=false；每帧 `clouds.rotation.y += 16e-5`。
4. **大气辉光**：`SphereGeometry(1.028, 64, 48)`，自定义 ShaderMaterial（fresnel 风格），BackSide，AdditiveBlending，transparent，depthWrite=false。

光照：
- DirectionalLight（太阳）color `#FFF6E8`，intensity `2.6`，position = sunECI × 10（每帧更新）
- AmbientLight color `#223048`，intensity `0.85`
- HemisphereLight sky `#2A3C5F` ground `#05070D` intensity `0.5`

#### Scenario: 首屏渲染
- **WHEN** 用户首次打开页面
- **THEN** 看到全屏深空背景、地球日侧纹理清晰、夜侧有黄色城市灯光、外缘青蓝大气辉光、缓慢自转的云层

#### Scenario: 太阳光照方向
- **WHEN** 引擎每帧调用 `Xx(date, gmst)` 计算太阳 ECI 单位向量
- **THEN** DirectionalLight 位置 = sunVec × 10；night shader 的 `uSunDir` = sunVec；昼夜分界线随真实时间移动

---

### Requirement: 星空背景
系统 SHALL 在场景中渲染两层 `THREE.Points` 静态星空：

- **层 1**：3200 颗星，size 1.5，opacity 0.85，距离 280–600（随机方向 × (280 + rand·320)）
- **层 2**：160 颗亮星，size 2.7，opacity 0.95

两层均使用 `PointsMaterial`（sizeAttenuation:false, vertexColors:true, frustumCulled:false）。星色亮度 0.35–1.0，约 20% 加蓝色调（`b*0.85`），其余近白（`b*0.92`）。无闪烁动画。

---

### Requirement: 卫星 Points 渲染（自定义着色器）
系统 SHALL 为每个星座分组创建一个独立的 `THREE.Points` 对象（最多 10 组），每组的几何体 `position` 属性为 `Float32Array(satCount × 3)`，`setUsage(DynamicDrawUsage)`，每帧更新。

**顶点着色器**：
```glsl
uniform float uSize;
uniform float uPixelRatio;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float s = uSize * uPixelRatio * (2.4 / -mv.z);
  gl_PointSize = clamp(s, 1.2, 14.0);
}
```

**片元着色器**：
```glsl
uniform vec3 uColor;
uniform float uOpacity;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.1, d);
  if (a < 0.02) discard;
  gl_FragColor = vec4(uColor, a * uOpacity);
}
```

uniforms：`uColor`=分组颜色 × 1.25（增亮）、`uSize`=分组点尺寸、`uPixelRatio`、`uOpacity`=0.95。AdditiveBlending，transparent，depthWrite=false，frustumCulled=false。`Points.visible` 跟随分组显隐开关。

#### Scenario: 性能
- **WHEN** 加载 ~8000 颗卫星
- **THEN** 每帧仅重新传播 1/6 的卫星（轮询 `cursor = (cursor+1) % n`），每颗卫星约 10 Hz 更新；位置经 ECI→ECEF（绕 Z 轴 -GMST 旋转）→ three.js 坐标（km/6371, Y/Z 轴交换）写入 position 属性

#### Scenario: 传播失败
- **WHEN** 某卫星 sgp4 返回错误
- **THEN** 该位置写入 `(0, -1e5, 0)`（屏幕外下方），不渲染

---

### Requirement: 10 个星座分组
系统 SHALL 内置以下分组定义（数组顺序即渲染顺序与索引）：

| key | 中文 | EN | 颜色 | 点尺寸 |
|---|---|---|---|---|
| `starlink` | 星链 | Starlink | `#7dd3fc` | 2.1 |
| `oneweb` | 一网 | OneWeb | `#c084fc` | 2.3 |
| `stations` | 空间站 | Stations | `#ffffff` | 5.2 |
| `gps` | GPS | GPS | `#4ade80` | 3.0 |
| `beidou` | 北斗 | BeiDou | `#facc15` | 3.0 |
| `glonass` | 格洛纳斯 | GLONASS | `#fb923c` | 3.0 |
| `galileo` | 伽利略 | Galileo | `#818cf8` | 3.0 |
| `iridium` | 铱星 | Iridium | `#f472b6` | 2.8 |
| `weather` | 气象 | Weather | `#2dd4bf` | 3.2 |
| `other` | 其他 | Others | `#8ea2c0` | 1.9 |

分组归属：从 `public/data/groups.json`（`NORAD_ID_STRING → group_key`）查询；未命中者归入 `other`。

---

### Requirement: TLE 数据加载
系统 SHALL 按以下顺序加载卫星轨道数据：

1. 显示加载遮罩 "正在加载 TLE 快照…"（progress 5%）
2. 并行 `fetch` 三个本地文件：`./data/tle-active.txt`、`./data/groups.json`、`./data/meta.json`
3. "解析 X.X MB 轨道根数…"（progress 35%）— 用 satellite.js `twoline2satrec` 解析（3 行格式：name + L1 + L2）
4. "构建 N 颗卫星轨道模型…"（progress 70%）— `buildGroups()`
5. dataStatus = `"snapshot"`，触发 `onDataStatus` 回调
6. "即将进入轨道…"（progress 95%）
7. 后台 `syncLive()` 异步请求 `https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle`（`cache:"no-store"`），成功则重建分组、`tleEpochMs=now`、dataStatus=`"live"`、触发 `onRebuilt`（重建 3D Points）；失败则 dataStatus=`"snapshot-stale"`

#### Scenario: 解析失败
- **WHEN** 解析后卫星数 < 100
- **THEN** 抛出 `"TLE 快照解析失败"` 错误

#### Scenario: 在线同步失败
- **WHEN** CelesTrak 请求失败或响应体不以 `"1 "` 开头
- **THEN** 保持快照数据，状态徽章显示橙色 "● 内置 TLE 快照"

---

### Requirement: 时间控制器
系统 SHALL 提供一个时间控制器类，含字段：`simMs`（模拟时间锚点）、`realMs`（`performance.now()` 锚点）、`speed`（倍速，默认 1）、`playing`（默认 true）。

- `now()`：播放时返回 `new Date(simMs + (performance.now() - realMs) * speed)`，否则 `new Date(simMs)`
- `reanchor()`：将 simMs 同步到当前 `now()`、realMs 同步到当前 `performance.now()`
- `setSpeed(n)`、`toggle()`、`resetToNow()` 调用前先 `reanchor()`
- `setSpeed` 强制 `playing = true`
- 倍速档位：`[1, 10, 60, 300, 1000]`，无倒放

---

### Requirement: 选中卫星的轨道线、地面覆盖圈、选中环
系统 SHALL 在选中卫星时显示以下三个视觉元素：

1. **轨道线**：`THREE.Line` + `LineBasicMaterial` color `0x8BE9FF` opacity 0.9 transparent；几何体 `Float32Array(220 × 3)`，按完整周期 `2π/rec.no` 分钟采样 220 点；脏标记时重建，节流 1100ms；仅选中时可见。
2. **地面覆盖圈**：
   - `covLoop`：`THREE.Line` color `0x67E8F9` opacity 0.85，96 段
   - `covFan`：`THREE.Mesh`（三角形扇）`MeshBasicMaterial` color `0x22D3EE` opacity 0.07 DoubleSide depthWrite=false
   - 半径：`earthCentralAngle = acos(1/(1+altInEarthRadii))`
   - 圆平面垂直于卫星位置向量（Gram-Schmidt 构造两组基向量）
   - 顶点 × 1.0016 抬离地表
   - 每帧更新
3. **选中环**：`THREE.Sprite`，128×128 canvas 纹理（白色环 lineWidth 6 at radius 44，白色中心点半径 8）；`SpriteMaterial` opacity 0.95 transparent depthWrite=false；脉冲缩放 `0.034 + 0.007 * sin(time * 0.005)`；定位在选中卫星 3D 位置

#### Scenario: 选中
- **WHEN** 用户点击 3D 卫星或搜索结果或 URL `?sel=<NORAD>`
- **THEN** 轨道线、覆盖圈、选中环立即可见，详情面板滑入；**相机不自动飞向卫星**

#### Scenario: 取消选中
- **WHEN** 用户按下 `Escape`
- **THEN** 取消选中，隐藏轨道线/覆盖圈/选中环/详情面板

---

### Requirement: 相机与控制器
系统 SHALL 使用 `PerspectiveCamera(fov=45, near=0.01, far=3000)`，初始位置基于启动时太阳方向：`(sunX*2.15 - sunZ*0.8, sunY*1.7 + 0.5, sunZ*2.15 + sunX*0.8)`（确保初始视图对准日侧）。

`OrbitControls` 配置：`enableDamping=true`、`dampingFactor=0.08`、`rotateSpeed=0.55`、`minDistance=1.14`、`maxDistance=40`、`autoRotate=true`、`autoRotateSpeed=-0.28`、`enablePan=false`。

- `start` 事件：关闭 autoRotate，记录 `lastInteract`
- 动画循环中：若 `!autoRotate && now - lastInteract > 12000` → 重新启用 autoRotate

`WebGLRenderer({antialias:true, alpha:false})`，`setPixelRatio(min(devicePixelRatio, 2))`，`toneMapping=ACESFilmicToneMapping`，`toneMappingExposure=1.12`，输出色彩空间 SRGB。

#### Scenario: 拾取
- **WHEN** `pointerup` 且移动距离 < 6px（与 pointerdown 位置比较）
- **THEN** NDC → `Raycaster`（`params.Points.threshold = 0.022`）→ `intersectObjects(visibleSatPoints, false)` → 首个命中的 `object.userData.group.sats[index]` → `engine.select(norad)`

---

### Requirement: HTML 卫星标签覆盖层
系统 SHALL 在 canvas 同级渲染两个 `<div class="sat-label">` 元素：一个永久跟随 ISS（NORAD 25544，文本 "国际空间站 ISS"），一个跟随当前选中卫星。

每帧更新：3D 位置 → NDC → CSS `left/top` = `(x·0.5+0.5)·width` / `(-y·0.5+0.5)·height`。

**遮挡判断**：若 `normalizedSatPos · normalizedCameraPos < 0.12` → 隐藏（卫星在地球背面）。

`.sat-label` 样式：`position:absolute; left:-100px; top:-100px; transform:translate(-50%,-150%); padding:2px 7px; font-size:10px; letter-spacing:.05em; color:#e2f3ff; background:#080f1ea6; border:1px solid rgba(125,211,252,.25); border-radius:6px; backdrop-filter:blur(6px); white-space:nowrap; pointer-events:none; display:none; z-index:15`

`.sat-label--sel`（选中变体）：`color:#a5f3fc; border-color:#67e8f98c; box-shadow:0 0 14px #67e8f940`

---

### Requirement: 加载遮罩（LoadingOverlay）
系统 SHALL 在初始化期间显示全屏 `z-50` 遮罩，背景 `#020409`，完成后 700ms 淡出。

布局：
- 居中 520×520 径向辉光 `bg-cyan-500/10 blur-[120px]`
- 80×80 旋转环 `border-cyan-300/20` + `border-t-cyan-300/80`，`animate-spin` 1.6s
- 中心 10px 圆点 `bg-cyan-300`，`shadow-[0_0_18px_4px_rgba(103,232,249,0.7)]`
- 标题 `ORBITLIVE`：`text-2xl font-semibold tracking-[0.35em] text-slate-100`
- 副标题 `全球卫星实时追踪`：`text-xs tracking-[0.3em] text-cyan-200/60`
- 进度条：`w-64 h-[3px] bg-slate-800`，填充 `bg-gradient-to-r from-cyan-400 to-sky-500`，宽度 = `round(progress*100)%`
- 状态文本（动态传入，如 "解析 2.3 MB 轨道根数…"）
- 页脚：`轨道数据：CelesTrak NORAD GP（TLE） · 推算：satellite.js SGP4（浏览器本地实时计算）`

进度映射：0–0.8 来自引擎数据初始化，0.8–1.0 来自 3D 引擎初始化。

---

### Requirement: HUD 头部状态栏
系统 SHALL 在 `absolute left-0 right-0 top-0 z-20 p-4 md:p-5 pointer-events-none` 渲染头部：

- `ORBITLIVE`：`text-lg md:text-xl font-semibold tracking-[0.28em] text-slate-100`
- 状态药丸（`<sm` 隐藏）：`glass rounded-full px-2.5 py-1 text-[10px] tracking-wider`
  - `dataStatus==="live"`：`text-emerald-300`，文本 `● CelesTrak 实时 TLE 已同步`
  - 其他：`text-amber-300`，文本 `● 内置 TLE 快照`
- 计数行：`text-[11px] tracking-wider text-slate-400`，格式 `${visibleCount.toLocaleString()} / ${total.toLocaleString()} 颗在轨目标 · TLE 更新于 ${ageStr}`
  - ageStr：`<1min → 刚刚`、`<60min → "N 分钟前"`、`<2880min → "N 小时前"`、否则 `"N 天前"`

---

### Requirement: 搜索框
系统 SHALL 在 `absolute right-4 top-4 z-30 w-60 md:w-72` 渲染搜索框（`glass rounded-xl px-3 py-2`）：

- 内联 SVG 放大镜图标（circle r=7 + 把手），`text-cyan-300/70`，16px
- `<input>` placeholder `搜索卫星：ISS / STARLINK-…`，`text-sm text-slate-200`，`placeholder:text-slate-500`
- 非空时显示 `✕` 清空按钮
- 结果下拉：`glass mt-2 max-h-72 overflow-auto rounded-xl py-1`，每行按钮 `hover:bg-cyan-400/10`
  - 8×8 颜色点（`background: groupColor; boxShadow: 0 0 6px groupColor`）
  - 名称：`text-sm text-slate-200 truncate`
  - 副文本：`text-[10px] text-slate-500`，格式 `#${norad} · ${groupLabel}`

搜索逻辑：lowercase trim，分 `startsWith`（优先）与 `includes` 两类，最多返回 **9** 条。点击外部关闭下拉。

---

### Requirement: 星座分组面板
系统 SHALL 在 `absolute right-4 top-1/2 -translate-y-1/2 z-20 w-44 md:w-48` 渲染可折叠面板（`glass rounded-2xl p-2.5`）：

- 头部：`星座分组` + `−`/`+` 切换按钮，`text-[11px] tracking-[0.2em] text-slate-400`
- 每行按钮：
  - 8×8 颜色点（可见时 `boxShadow: 0 0 7px color`，不可见时无）
  - 标签 `text-xs text-slate-300` + EN 标签 `text-[10px] text-slate-500`
  - 计数 `font-num text-[10px] text-slate-500`，`count.toLocaleString()`
- 点击切换 `setGroupVisible(key, !visible)`

---

### Requirement: 详情面板
系统 SHALL 在 `absolute bottom-20 left-4 md:bottom-5 md:left-5 z-20 w-64 md:w-72` 渲染详情卡片（`glass rounded-2xl p-4`），仅在选中卫星时显示：

- 头部行：
  - h3 名称：`text-sm font-semibold text-slate-100 truncate`
  - 副文本：`text-[10px] tracking-wider text-slate-500`，`NORAD #${norad}`
  - 分组徽章：`rounded-full px-2 py-0.5 text-[10px]`，`color:groupColor`，`background: ${color}22`，`border: 1px solid ${color}44`
  - `✕` 关闭按钮
- 信息行（label `text-[11px] text-slate-500`，value `text-xs text-slate-200 font-num`，divider `divide-slate-700/30`）：
  1. **高度** `${altKm.toFixed(1)} km`
  2. **速度** `${velKmS.toFixed(2)} km/s`
  3. **纬度 / 经度** `${abs(lat).toFixed(2)}° N/S / ${abs(lon).toFixed(2)}° E/W`
  4. **轨道周期** `${periodMin.toFixed(1)} min`（`2π/rec.no`）
  5. **轨道倾角** `${inclDeg.toFixed(2)}°`
  6. **TLE 龄期** `<1 day → "${(age*24).toFixed(1)} 小时"`，否则 `"${age.toFixed(1)} 天"`
- 页脚注释：`text-[10px] leading-4 text-slate-500`，`轨道线与地面覆盖圈基于 SGP4 对整周期 220 点采样推算`

---

### Requirement: 时间控制条
系统 SHALL 在 `absolute bottom-4 left-1/2 -translate-x-1/2 z-20` 渲染时间控制条（`glass rounded-2xl px-3 py-2 md:px-4`）：

- `⏮ 现在` 按钮：title `回到当前真实时间`，`text-[11px] text-slate-300 hover:bg-cyan-400/15 hover:text-cyan-200`，调用 `time.resetToNow()`
- 播放/暂停按钮：28×28，`bg-cyan-400/15 text-cyan-200 hover:bg-cyan-400/25`，播放时显示 `❚❚`，暂停时显示 `▶`，调用 `time.toggle()`
- 分隔条 `h-5 w-px bg-slate-600/50`
- 倍速按钮组 `[1, 10, 60, 300, 1000]`，显示 `1× 10× 60× 300× 1000×`
  - 激活：`bg-cyan-400/20 text-cyan-200`
  - 未激活：`text-slate-400 hover:bg-cyan-400/10 hover:text-slate-200`
  - `font-num text-[11px]`
- 时钟显示（`<sm` 隐藏）：`min-w-[148px] text-center font-num text-[11px] tracking-wider text-slate-300`，格式 `2026-07-27 12:34:56 UTC`（即 `toISOString().replace("T"," ").slice(0,19) + " UTC"`）

---

### Requirement: 来源标注
系统 SHALL 在 `absolute bottom-4 right-4 z-10 hidden md:block text-[10px] leading-4 text-slate-600 pointer-events-none` 显示文本：`数据：CelesTrak NORAD GP · SGP4 本地推算 · 无 API key`

---

### Requirement: URL 深链
系统 SHALL 在加载完成后读取 `?sel=<NORAD>` 查询参数，自动选中对应卫星并标记轨道为脏。`Escape` 取消选中时同步清除 URL 参数。

---

### Requirement: 视觉与色彩规范
- 页面背景：`#010208`，`overscroll-behavior:none`
- `.glass` 类：`background:#080f1e8c; backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border:1px solid rgba(125,211,252,.14); box-shadow:0 4px 24px #00000059`
- `.font-num` 类：`font-variant-numeric:tabular-nums; font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace`
- 滚动条：`*::-webkit-scrollbar{width:6px}` `*::-webkit-scrollbar-thumb{background:#7dd3fc33;border-radius:3px}`
- 字体：默认 Tailwind sans 栈；数字用 `.font-num`
- 字距令牌：标题 `0.28em`（头部）/ `0.35em`（加载器）、副标题 `0.3em`、分组面板头 `0.2em`、状态药丸与时钟 `tracking-wider`

---

### Requirement: 工程结构
系统 SHALL 使用 Vite + React 19 + TypeScript，目录结构如下：

```
/workspace
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── src
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── pages/Home.tsx
│   ├── components/Hud.tsx
│   ├── components/LoadingOverlay.tsx
│   └── engine
│       ├── Engine.ts        # 3D 引擎主类
│       ├── time.ts          # 时间控制器
│       ├── data.ts          # TLE 加载/解析/分组
│       ├── sun.ts           # 太阳方向计算
│       ├── shaders.ts       # 6 段 GLSL 着色器
│       └── groups.ts        # 10 个星座分组定义
└── public
    ├── data
    │   ├── tle-active.txt
    │   ├── groups.json
    │   └── meta.json
    └── textures
        ├── earth_atmos_2048.jpg
        ├── earth_normal_2048.jpg
        ├── earth_specular_2048.jpg
        ├── earth_lights_2048.png
        └── earth_clouds_1024.png
```

依赖：`react@19.2.3`、`react-dom@19.2.3`、`three@^0.163`、`satellite.js`、`tailwindcss@^3`、`postcss`、`autoprefixer`、`vite`、`@vitejs/plugin-react`、`typescript`、`@types/three`、`@types/react`、`@types/react-dom`。

#### Scenario: 启动
- **WHEN** 执行 `npm install && npm run dev`
- **THEN** 开发服务器在 `http://localhost:5173` 启动，浏览器打开后见加载遮罩 → 3D 地球 → 完整 HUD

#### Scenario: 构建
- **WHEN** 执行 `npm run build`
- **THEN** 产出 `dist/` 静态资源，可直接部署到任意静态托管服务
