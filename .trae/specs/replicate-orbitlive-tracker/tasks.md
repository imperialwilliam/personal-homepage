# Tasks

- [x] Task 1: 工程脚手架与依赖安装
  - [ ] SubTask 1.1: 在 `/workspace` 初始化 Vite + React 19 + TypeScript 工程（`package.json`、`vite.config.ts`、`tsconfig.json`、`tsconfig.node.json`、`index.html` 含 `<div id="root">` 与 `theme-color #010208`）
  - [ ] SubTask 1.2: 配置 Tailwind CSS 3（`tailwind.config.js`、`postcss.config.js`，content 指向 `src/**/*.{ts,tsx}`）
  - [ ] SubTask 1.3: 安装依赖 `three@^0.163`、`satellite.js`、`@types/three`，并验证 `npm install` 通过
  - [ ] SubTask 1.4: 编写 `src/index.css`，注入 `.glass`、`.font-num`、`.sat-label`、`.sat-label--sel` 自定义类与 `body{background:#010208;overscroll-behavior:none}`、滚动条样式

- [x] Task 2: 拉取原站静态资产到 `public/`
  - [ ] SubTask 2.1: 下载 `tle-active.txt`、`groups.json`、`meta.json` 到 `public/data/`
  - [ ] SubTask 2.2: 下载 5 张地球纹理（`earth_atmos_2048.jpg`、`earth_normal_2048.jpg`、`earth_specular_2048.jpg`、`earth_lights_2048.png`、`earth_clouds_1024.png`）到 `public/textures/`
  - [ ] SubTask 2.3: 验证文件大小与原站一致（TLE ~2.7MB、groups.json ~221KB、5 张纹理总 ~2MB）

- [x] Task 3: 引擎基础模块（无 3D 依赖）
  - [ ] SubTask 3.1: `src/engine/groups.ts` 导出 10 个分组定义数组（key、中文、EN、颜色 hex、点尺寸）
  - [ ] SubTask 3.2: `src/engine/sun.ts` 实现 `sunDirectionECI(date, gmst)` 函数（J2000 历元太阳位置公式）
  - [ ] SubTask 3.3: `src/engine/shaders.ts` 导出 6 段 GLSL 源码字符串：satellite point vertex/fragment、night vertex/fragment、atmosphere vertex/fragment
  - [ ] SubTask 3.4: `src/engine/time.ts` 实现时间控制器类（`simMs`、`realMs`、`speed`、`playing`、`now()`、`reanchor()`、`setSpeed()`、`toggle()`、`resetToNow()`）

- [x] Task 4: TLE 数据加载与解析
  - [ ] SubTask 4.1: `src/engine/data.ts` 实现 `loadSnapshot()`：并行 fetch 三个本地文件，返回 `{ tleText, groupsMap, meta }`
  - [ ] SubTask 4.2: 实现 `parseTLE(tleText, groupsMap)`：按 3 行格式遍历，用 `twoline2satrec` 解析，返回 `{ sats, groups }`（sats 含 name、norad、satrec、groupKey；groups 按 10 个分组归类）
  - [ ] SubTask 4.3: 实现 `syncLive()`：fetch CelesTrak URL，校验响应体以 `"1 "` 开头，成功则重新解析并触发 `onRebuilt`
  - [ ] SubTask 4.4: 实现进度回调与 `dataStatus` 状态机（`loading → snapshot → live | snapshot-stale`）
  - [ ] SubTask 4.5: 实现异常处理：解析后 satCount < 100 抛出 `"TLE 快照解析失败"`；在线同步失败保持快照

- [x] Task 5: 3D 引擎主类（地球与场景）
  - [ ] SubTask 5.1: `src/engine/Engine.ts` 初始化 scene/camera/renderer/controls，配置 ACESFilmicToneMapping、SRGB、pixelRatio
  - [ ] SubTask 5.2: 加载 5 张纹理并构建 5 层地球球体（表面/夜景/云层/大气辉光），按 spec 配置材质与几何参数
  - [ ] SubTask 5.3: 构建 2 层星空 Points（3200 + 160 颗，随机方向、距离、亮度）
  - [ ] SubTask 5.4: 添加 DirectionalLight、AmbientLight、HemisphereLight
  - [ ] SubTask 5.5: 设置相机初始位置（基于启动时太阳方向）与 OrbitControls 配置（含 autoRotate 12 秒空闲恢复逻辑）

- [x] Task 6: 卫星 Points 与传播循环
  - [ ] SubTask 6.1: 为每个分组创建 `THREE.Points` + 自定义 ShaderMaterial（ uniforms：uColor、uSize、uPixelRatio、uOpacity ）
  - [ ] SubTask 6.2: 实现 `propagateSlice(date)` 轮询传播：cursor 每帧 +1 mod n，处理 1/6 卫星，sgp4 → ECI → ECEF（绕 Z 轴 -GMST）→ three.js 坐标
  - [ ] SubTask 6.3: 实现失败传播位置写入 `(0, -1e5, 0)` 与 `geometry.attributes.position.needsUpdate = true`
  - [ ] SubTask 6.4: 实现 `setGroupVisible(key, visible)` 切换 Points.visible

- [x] Task 7: 选中视觉元素（轨道线/覆盖圈/选中环）
  - [ ] SubTask 7.1: 实现轨道线 Line（color 0x8BE9FF、220 点、整周期采样、节流 1100ms）
  - [ ] SubTask 7.2: 实现地面覆盖圈 covLoop（Line，0x67E8F9，96 段）+ covFan（Mesh 三角扇，0x22D3EE，opacity 0.07）
  - [ ] SubTask 7.3: 实现选中环 Sprite（canvas 128×128 环+点纹理，脉冲缩放 `0.034 + 0.007*sin(time*0.005)`）
  - [ ] SubTask 7.4: 实现 `select(norad)` / `deselect()` 接口与脏标记机制

- [x] Task 8: 交互（拾取、键盘、URL 深链）
  - [ ] SubTask 8.1: 实现 pointerdown/pointerup 拾取（移动 < 6px 才触发），Raycaster threshold 0.022
  - [ ] SubTask 8.2: 实现 `Escape` 键取消选中并清除 URL `?sel` 参数
  - [ ] SubTask 8.3: 实现加载完成后读取 `?sel=<NORAD>` 自动选中
  - [ ] SubTask 8.4: 实现 resize 处理（更新 camera.aspect、renderer.setSize）

- [x] Task 9: HTML 卫星标签覆盖层
  - [ ] SubTask 9.1: 在 canvas 同级创建两个 `<div class="sat-label">`（ISS 永久 + 选中），ISS 文本 `国际空间站 ISS`
  - [ ] SubTask 9.2: 每帧投影 3D 位置到 NDC，更新 CSS left/top，遮挡判断 `dot(satPos, cameraPos) < 0.12` 时隐藏
  - [ ] SubTask 9.3: 选中卫星标签添加 `.sat-label--sel` 类

- [x] Task 10: 加载遮罩组件
  - [ ] SubTask 10.1: `src/components/LoadingOverlay.tsx` 实现全屏 z-50 遮罩（背景 #020409、520×520 辉光、80×80 旋转环、中心 10px 圆点）
  - [ ] SubTask 10.2: 实现 ORBITLIVE 标题（text-2xl tracking-[0.35em]）、副标题、进度条（w-64、渐变填充）、动态状态文本、页脚注释
  - [ ] SubTask 10.3: 实现完成时 700ms 淡出动画

- [x] Task 11: HUD 组件
  - [ ] SubTask 11.1: 实现头部状态栏（ORBITLIVE 标题、状态药丸 live/snapshot、计数行 + ageStr 格式化）
  - [ ] SubTask 11.2: 实现搜索框（输入、✕ 清空、放大镜 SVG、结果下拉 9 条限制、startsWith/includes 排序、点击外部关闭）
  - [ ] SubTask 11.3: 实现星座分组面板（10 行、可折叠、颜色点带辉光、计数 font-num）
  - [ ] SubTask 11.4: 实现详情面板（6 行信息、分组徽章、✕ 关闭、页脚注释）
  - [ ] SubTask 11.5: 实现时间控制条（⏮ 现在、播放/暂停、5 个倍速按钮、UTC 时钟）
  - [ ] SubTask 11.6: 实现右下来源标注

- [x] Task 12: 应用集成
  - [ ] SubTask 12.1: `src/App.tsx` 用 BrowserRouter 包裹 Home 路由
  - [ ] SubTask 12.2: `src/pages/Home.tsx` 创建 canvas 容器、实例化 Engine、订阅回调、渲染 Hud + LoadingOverlay + sat-labels
  - [ ] SubTask 12.3: `src/main.tsx` createRoot 挂载 #root、引入 index.css
  - [ ] SubTask 12.4: 在动画循环中驱动 time.now()、propagateSlice、相机/光照/选中元素更新、sat-label 位置更新

- [x] Task 13: 验证
  - [ ] SubTask 13.1: 执行 `npm run dev` 启动开发服务器，确认无控制台错误
  - [ ] SubTask 13.2: 浏览器打开页面，按 checklist.md 逐项核对视觉与交互
  - [ ] SubTask 13.3: 执行 `npm run build` 确认生产构建通过

# Task Dependencies
- Task 2 依赖 Task 1（需要 public 目录存在）
- Task 4 依赖 Task 3（需要 groups.ts、time.ts）
- Task 5 依赖 Task 3（需要 shaders.ts、sun.ts）
- Task 6 依赖 Task 5（需要 Engine 与场景）
- Task 7 依赖 Task 6（需要分组与卫星传播）
- Task 8 依赖 Task 7（需要 select 接口）
- Task 9 依赖 Task 8（需要选中状态）
- Task 10、Task 11 可与 Task 5–9 并行（独立 UI 组件）
- Task 12 依赖 Task 5–11 全部完成
- Task 13 依赖 Task 12
