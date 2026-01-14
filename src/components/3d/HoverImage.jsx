"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, MathUtils } from "three";
import { useMemo, useRef, useState } from "react";

function GlitchPlane({ baseImage, revealImage }) {
  const mesh = useRef();
  const tex1 = useLoader(TextureLoader, baseImage);
  const tex2 = useLoader(TextureLoader, revealImage);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!mesh.current) return;

    const mat = mesh.current.material;
    mat.uniforms.uProgress.value = MathUtils.lerp(
      mat.uniforms.uProgress.value,
      hovered ? 1 : 0,
      0.08
    );
    // mat.uniforms.uTime.value += delta;
  });

  const material = useMemo(
    () => ({
      uniforms: {
        uTexture1: { value: tex1 },
        uTexture2: { value: tex2 },
        uProgress: { value: 0 },
        uTime: { value: 0 },
      },
    }),
    [tex1, tex2]
  );

//   tex1.colorSpace = SRGBColorSpace;
// tex2.colorSpace = SRGBColorSpace;


  return (
    <mesh
      ref={mesh}
      onPointerEnter={() => {
        setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
      }}
    >
      <planeGeometry args={[3, 4, 64, 64]} />

      <shaderMaterial
        transparent
        attach="material"
        {...material}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform sampler2D uTexture1;
          uniform sampler2D uTexture2;
          uniform float uProgress;
          uniform float uTime;
          varying vec2 vUv;

          float random(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
          }

          void main() {
            vec2 uv = vUv;

            // WAVE DISTORTION
            float wave = sin(uv.y * 12.0 + uTime * 3.0) * 0.03 * uProgress;
            uv.x += wave;

            // GLITCH SLICES
            float slice = step(0.98, random(vec2(floor(uv.y * 20.0), uTime)));
            uv.x += slice * 0.08 * uProgress;

            vec4 base = texture2D(uTexture1, uv);
            vec4 reveal = texture2D(uTexture2, uv);

            vec4 finalColor = mix(base, reveal, uProgress);
            gl_FragColor = finalColor;
          }
        `}
      />
    </mesh>
  );
}

export default function HoverGlitchReveal({ baseImage, revealImage }) {
  return (
    <div
      className="h-120 w-120 object-cover"
      style={{
        WebkitMaskImage: "url('/textures/rough-mask.png')",
        WebkitMaskSize: "cover",
        WebkitMaskRepeat: "no-repeat",
        maskImage: "url('/textures/rough-mask.png')",
        maskSize: "cover",
        maskRepeat: "no-repeat",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        className="pointer-events-auto"
      >
        <ambientLight intensity={1} />
        <GlitchPlane baseImage={baseImage} revealImage={revealImage} />
      </Canvas>
    </div>
  );
}
