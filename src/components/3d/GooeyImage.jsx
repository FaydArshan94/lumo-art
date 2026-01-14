"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, Vector2, MathUtils } from "three";
import { useRef, useState } from "react";
import * as THREE from "three";

/* ===============================
   MATERIAL FACTORY (IMPORTANT)
================================ */
const createGooeyMaterial = () => ({
  uniforms: {
    uTexture: { value: null },
    uTime: { value: 0 },
    uHover: { value: 0 },
    uMouse: { value: new Vector2(0.5, 0.5) },
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uTexture;
    uniform float uTime;
    uniform float uHover;
    uniform vec2 uMouse;

    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      vec2 m = uMouse;
      float dist = distance(uv, m);

      float pull = smoothstep(0.6, 0.0, dist) * uHover;
      float wave = sin(dist * 12.0 - uTime * 3.0) * 0.04;

      uv += normalize(uv - m) * pull * wave;

      vec4 color = texture2D(uTexture, uv);
      gl_FragColor = color;
    }
  `,
});

/* ===============================
   GOOEY PLANE
================================ */
function GooeyPlane({ image }) {
  const mesh = useRef();
  const texture = useLoader(TextureLoader, image);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!mesh.current) return;

    const mat = mesh.current.material;

    mat.uniforms.uTime.value += delta;

    mat.uniforms.uHover.value = MathUtils.lerp(
      mat.uniforms.uHover.value,
      hovered ? 1 : 0,
      0.08
    );

    // relax mouse when not hovering
    if (!hovered) {
      mat.uniforms.uMouse.value.lerp(new Vector2(0.5, 0.5), 0.04);
    }
  });

  return (
    <mesh
      ref={mesh}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerMove={(e) => {
        mesh.current.material.uniforms.uMouse.value.set(e.uv.x, e.uv.y);
      }}
    >
      <planeGeometry args={[3, 4, 32, 32]} />
      <shaderMaterial
        args={[createGooeyMaterial()]}
        uniforms-uTexture-value={texture}
      />
    </mesh>
  );
}

/* ===============================
   PUBLIC COMPONENT
================================ */
export default function GooeyImage({ image }) {
  return (
    <div
      className="h-80 w-80 mt-20"
      style={{
        WebkitMaskImage: "url('/textures/rough-mask.png')",
        WebkitMaskSize: "cover",
        WebkitMaskRepeat: "no-repeat",
        maskImage: "url('/textures/rough-mask.png')",
        maskSize: "cover",
        maskRepeat: "no-repeat",
      }}
    >
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={1} />
        <GooeyPlane image={image} />
      </Canvas>
    </div>
  );
}
