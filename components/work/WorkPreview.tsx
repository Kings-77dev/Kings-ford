"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }`;

const FRAG = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uT1;
  uniform sampler2D uT2;
  uniform vec4 uF1;
  uniform vec4 uF2;
  uniform float uProgress;
  uniform float uTime;
  uniform vec2  uMouse;
  uniform float uHover;

  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  vec2 fit(vec2 uv, vec4 f){ return uv * f.xy + f.zw; }

  void main() {
    vec2 uv = vUv;

    float d = distance(uv, uMouse);
    vec2 dir = normalize(uv - uMouse + 1e-4);
    uv += dir * sin(d * 24.0 - uTime * 1.6) * 0.0055 * uHover * smoothstep(0.5, 0.0, d);

    float n = noise(uv * 5.0 + 3.7);
    float p = smoothstep(0.0, 1.0, clamp(uProgress * 1.4 - n * 0.4, 0.0, 1.0));
    vec2 uv1 = uv + vec2(0.16, 0.05) * p * n;
    vec2 uv2 = uv - vec2(0.16, 0.05) * (1.0 - p) * n;

    vec2 f1 = fit(uv1, uF1);
    vec2 f2 = fit(uv2, uF2);
    vec4 c1 = texture2D(uT1, f1);
    vec4 c2 = texture2D(uT2, f2);
    vec3 bg = vec3(0.063);
    float in1 = step(0.0, f1.x) * step(f1.x, 1.0) * step(0.0, f1.y) * step(f1.y, 1.0);
    float in2 = step(0.0, f2.x) * step(f2.x, 1.0) * step(0.0, f2.y) * step(f2.y, 1.0);
    c1.rgb = mix(bg, c1.rgb, in1);
    c2.rgb = mix(bg, c2.rgb, in2);
    gl_FragColor = mix(c1, c2, p);
  }`;

function fitContain(tex: THREE.Texture, w: number, h: number) {
  const img = tex.image as HTMLImageElement | { width: number; height: number; naturalWidth?: number; naturalHeight?: number };
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  const imageAspect = iw / ih;
  const planeAspect = w / h;
  let sx = 1;
  let sy = 1;
  // contain: scale the letterboxed axis > 1 so the whole image fits, centered
  if (imageAspect > planeAspect) sy = imageAspect / planeAspect;
  else sx = planeAspect / imageAspect;
  return new THREE.Vector4(sx, sy, (1 - sx) / 2, (1 - sy) / 2);
}

type PreviewApi = {
  to: (src: string) => void;
  destroy: () => void;
};

async function createPreview(container: HTMLDivElement, sources: string[]): Promise<PreviewApi> {
  const loader = new THREE.TextureLoader();
  const textures: Record<string, THREE.Texture> = {};

  await Promise.all(
    sources.map(
      (src) =>
        new Promise<void>((resolve, reject) => {
          loader.load(
            src,
            (texture) => {
              texture.colorSpace = THREE.SRGBColorSpace;
              texture.minFilter = THREE.LinearFilter;
              texture.magFilter = THREE.LinearFilter;
              texture.wrapS = THREE.ClampToEdgeWrapping;
              texture.wrapT = THREE.ClampToEdgeWrapping;
              textures[src] = texture;
              resolve();
            },
            undefined,
            () => reject(new Error(`texture load failed: ${src}`)),
          );
        }),
    ),
  );

  const renderer = new THREE.WebGLRenderer({
    antialias: false,
    alpha: false,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

  let W = container.clientWidth || 1;
  let H = container.clientHeight || 1;
  renderer.setSize(W, H);
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.inset = "0";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.zIndex = "1";
  renderer.domElement.style.pointerEvents = "auto";

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  let current = sources[0];
  const first = textures[current];

  const uniforms = {
    uT1: { value: first },
    uT2: { value: first },
    uF1: { value: fitContain(first, W, H) },
    uF2: { value: fitContain(first, W, H) },
    uProgress: { value: 0 },
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(-1, -1) },
    uHover: { value: 0 },
  };

  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms }),
  );
  scene.add(mesh);
  container.appendChild(renderer.domElement);

  let visible = true;
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  intersectionObserver.observe(container);

  const tick = (time: number) => {
    if (!visible) return;
    uniforms.uTime.value = time;
    renderer.render(scene, camera);
  };
  gsap.ticker.add(tick);

  const resizeObserver = new ResizeObserver(() => {
    W = container.clientWidth || 1;
    H = container.clientHeight || 1;
    renderer.setSize(W, H);
    uniforms.uF1.value = fitContain(uniforms.uT1.value, W, H);
    uniforms.uF2.value = fitContain(uniforms.uT2.value, W, H);
  });
  resizeObserver.observe(container);

  const onMove = (event: MouseEvent) => {
    const rect = container.getBoundingClientRect();
    uniforms.uMouse.value.set(
      (event.clientX - rect.left) / rect.width,
      1 - (event.clientY - rect.top) / rect.height,
    );
    gsap.to(uniforms.uHover, { value: 1, duration: 0.5, overwrite: "auto" });
  };
  const onLeave = () => {
    gsap.to(uniforms.uHover, { value: 0, duration: 0.8, overwrite: "auto" });
  };
  container.addEventListener("mousemove", onMove);
  container.addEventListener("mouseleave", onLeave);

  let tween: gsap.core.Tween | null = null;

  return {
    to(src: string) {
      if (!textures[src] || src === current) return;
      if (tween) {
        tween.kill();
        uniforms.uT1.value = uniforms.uT2.value;
        uniforms.uF1.value = uniforms.uF2.value;
      }
      current = src;
      uniforms.uT2.value = textures[src];
      uniforms.uF2.value = fitContain(textures[src], W, H);
      uniforms.uProgress.value = 0;
      tween = gsap.to(uniforms.uProgress, {
        value: 1,
        duration: 0.9,
        ease: "power2.inOut",
        onComplete: () => {
          uniforms.uT1.value = uniforms.uT2.value;
          uniforms.uF1.value = uniforms.uF2.value;
          uniforms.uProgress.value = 0;
          tween = null;
        },
      });
    },
    destroy() {
      if (tween) tween.kill();
      gsap.ticker.remove(tick);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
      Object.values(textures).forEach((texture) => texture.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}

export default function WorkPreview({
  sources,
  activeSrc,
}: {
  sources: string[];
  activeSrc: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<PreviewApi | null>(null);
  const activeRef = useRef(activeSrc);

  useEffect(() => {
    activeRef.current = activeSrc;
    apiRef.current?.to(activeSrc);
  }, [activeSrc]);

  useEffect(() => {
    let cancelled = false;
    const host = hostRef.current;
    if (!host) return;

    createPreview(host, sources)
      .then((api) => {
        if (cancelled) {
          api.destroy();
          return;
        }
        apiRef.current = api;
        api.to(activeRef.current);
      })
      .catch((error) => {
        console.warn("[WorkPreview] falling back to normal image:", error);
      });

    return () => {
      cancelled = true;
      apiRef.current?.destroy();
      apiRef.current = null;
    };
  }, [sources]);

  return <div ref={hostRef} aria-hidden="true" className="pointer-events-auto absolute inset-0 z-[1]" />;
}
