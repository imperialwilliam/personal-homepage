export const satPointVertex = `
uniform float uSize;
uniform float uPixelRatio;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float s = uSize * uPixelRatio * (2.4 / -mv.z);
  gl_PointSize = clamp(s, 1.2, 14.0);
}
`

export const satPointFragment = `
uniform vec3 uColor;
uniform float uOpacity;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.1, d);
  if (a < 0.02) discard;
  gl_FragColor = vec4(uColor, a * uOpacity);
}
`

export const nightVertex = `
varying vec2 vUv;
varying vec3 vWN;
void main() {
  vUv = uv;
  vWN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

export const nightFragment = `
uniform sampler2D uMap;
uniform vec3 uSunDir;
uniform float uIntensity;
varying vec2 vUv;
varying vec3 vWN;
void main() {
  vec3 night = texture2D(uMap, vUv).rgb;
  float ndl = dot(normalize(vWN), normalize(uSunDir));
  float m = 1.0 - smoothstep(-0.12, 0.3, ndl);
  gl_FragColor = vec4(night * m * uIntensity, 1.0);
}
`

export const atmosphereVertex = `
varying vec3 vN;
void main() {
  vN = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

export const atmosphereFragment = `
varying vec3 vN;
void main() {
  float i = pow(0.66 - dot(vN, vec3(0.0, 0.0, 1.0)), 2.4);
  gl_FragColor = vec4(0.32, 0.62, 1.0, 1.0) * i * 1.05;
}
`
