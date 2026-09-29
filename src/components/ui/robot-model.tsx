import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

class HeartCurve extends THREE.Curve<THREE.Vector3> {
  constructor() {
    super();
  }
  getPoint(t: number, optionalTarget = new THREE.Vector3()) {
    const angle = t * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(angle), 3);
    const y =
      13 * Math.cos(angle) -
      5 * Math.cos(2 * angle) -
      2 * Math.cos(3 * angle) -
      Math.cos(4 * angle);

    return optionalTarget.set(x * 0.002, (y + 6) * 0.002, 0);
  }
}

const sharedHeartCurve = new HeartCurve();

function ResponsiveGroup({
  children,
  scale = 1,
}: {
  children: React.ReactNode;
  scale?: number;
}) {
  const { viewport } = useThree();
  const s = Math.min(1.05, Math.max(0.75, viewport.width / 4.2)) * scale;
  return <group scale={s}>{children}</group>;
}

function GlassCapsule({
  color,
  power,
  intensity,
}: {
  color: string;
  power: number;
  intensity: number;
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      color: { value: new THREE.Color("#ffffff") },
      power: { value: 2.5 },
      intensity: { value: 0.6 },
    }),
    [],
  );

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.color.value.set(color);
      materialRef.current.uniforms.power.value = power;
      materialRef.current.uniforms.intensity.value = intensity;
    }
  });

  return (
    <mesh>
      <sphereGeometry args={[0.3, 64, 64, 0, Math.PI * 2, 0, Math.PI]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          uniform vec3 color;
          uniform float power;
          uniform float intensity;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vec3 normal = normalize(vNormal);
            vec3 viewDir = normalize(vViewPosition);
            float fresnel = 1.0 - max(dot(viewDir, normal), 0.0);
            fresnel = pow(fresnel, power);
            gl_FragColor = vec4(color, fresnel * intensity);
          }
        `}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

const earBaseMat = new THREE.MeshStandardMaterial({
  color: "#e2e8f0",
  roughness: 0.4,
  metalness: 0.1,
});
const earRingMat = new THREE.MeshStandardMaterial({
  color: "#ffffff",
  roughness: 0.2,
  metalness: 0.2,
});
const earCenterMat = new THREE.MeshStandardMaterial({
  color: "#cbd5e1",
  roughness: 0.7,
});
const antennaBaseMat = new THREE.MeshStandardMaterial({
  color: "#94a3b8",
  roughness: 0.4,
  metalness: 0.5,
});
const antennaStickMat = new THREE.MeshStandardMaterial({
  color: "#cbd5e1",
  roughness: 0.3,
  metalness: 0.3,
});
const antennaTipMat = new THREE.MeshStandardMaterial({
  color: "#2563eb", // blue accent matching portfolio
  roughness: 0.2,
  toneMapped: false,
});

function RobotEar({
  position,
  scale = 1,
  isLeft = false,
}: {
  position: [number, number, number];
  scale?: number;
  isLeft?: boolean;
}) {
  const dir = isLeft ? -1 : 1;

  return (
    <group position={position} scale={scale}>
      <mesh
        rotation={[0, 0, Math.PI / 2]}
        castShadow
        receiveShadow
        material={earBaseMat}
      >
        <cylinderGeometry args={[0.04, 0.04, 0.025, 32]} />
      </mesh>

      <mesh
        position={[dir * 0.012, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
        castShadow
        receiveShadow
        material={earRingMat}
      >
        <torusGeometry args={[0.032, 0.008, 16, 32]} />
      </mesh>

      <mesh
        position={[dir * 0.012, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
        castShadow
        receiveShadow
        material={earCenterMat}
      >
        <cylinderGeometry args={[0.03, 0.03, 0.005, 32]} />
      </mesh>

      <group position={[dir * 0.015, 0.035, 0]} rotation={[-0.4, 0, 0]}>
        <mesh
          position={[0, 0.01, 0]}
          castShadow
          receiveShadow
          material={antennaBaseMat}
        >
          <cylinderGeometry args={[0.006, 0.008, 0.02, 16]} />
        </mesh>
        <mesh
          position={[0, 0.06, 0]}
          castShadow
          receiveShadow
          material={antennaStickMat}
        >
          <cylinderGeometry args={[0.003, 0.003, 0.1, 8]} />
        </mesh>
        <mesh
          position={[0, 0.11, 0]}
          castShadow
          receiveShadow
          material={antennaTipMat}
        >
          <sphereGeometry args={[0.006, 16, 16]} />
        </mesh>
      </group>
    </group>
  );
}

const eyeMat = new THREE.MeshBasicMaterial({
  color: new THREE.Color("#00ffc6"),
  toneMapped: false,
  transparent: true,
});
const heartMat = new THREE.MeshBasicMaterial({
  color: "#2563eb",
  toneMapped: false,
});

function RobotEye({
  position,
  rotation,
  scale = 1,
  blinkDuration = 0.15,
  blinkCycle = 3.0,
  isLovedRef,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
  blinkDuration?: number;
  blinkCycle?: number;
  isLovedRef: { current: boolean };
}) {
  const groupRef = useRef<THREE.Group>(null);
  const normalEyesRef = useRef<THREE.Group>(null);
  const heartEyeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current || !normalEyesRef.current || !heartEyeRef.current)
      return;

    const isHeart = isLovedRef.current;

    normalEyesRef.current.visible = !isHeart;
    heartEyeRef.current.visible = isHeart;

    const cycle = clock.getElapsedTime() % blinkCycle;

    let targetScaleY = 1;

    if (cycle < blinkDuration && !isHeart) {
      const progress = cycle / blinkDuration;
      const blinkClose = Math.sin(progress * Math.PI);

      targetScaleY = Math.max(0.05, 1.0 - blinkClose);
    }

    groupRef.current.scale.set(scale, scale * targetScaleY, scale);
  });

  const { topPath, bottomPath } = useMemo(() => {
    const w = 0.025;
    const h = 0.035;
    const r = 0.02;
    const g = 0.005;

    const tPath = new THREE.CurvePath<THREE.Vector3>();
    tPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(-w, g, 0),
        new THREE.Vector3(-w, h - r, 0),
      ),
    );
    tPath.add(
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-w, h - r, 0),
        new THREE.Vector3(-w, h, 0),
        new THREE.Vector3(-w + r, h, 0),
      ),
    );
    tPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(-w + r, h, 0),
        new THREE.Vector3(w - r, h, 0),
      ),
    );
    tPath.add(
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(w - r, h, 0),
        new THREE.Vector3(w, h, 0),
        new THREE.Vector3(w, h - r, 0),
      ),
    );
    tPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(w, h - r, 0),
        new THREE.Vector3(w, g, 0),
      ),
    );

    const bPath = new THREE.CurvePath<THREE.Vector3>();
    bPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(-w, -g, 0),
        new THREE.Vector3(-w, -(h - r), 0),
      ),
    );
    bPath.add(
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-w, -(h - r), 0),
        new THREE.Vector3(-w, -h, 0),
        new THREE.Vector3(-w + r, -h, 0),
      ),
    );
    bPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(-w + r, -h, 0),
        new THREE.Vector3(w - r, -h, 0),
      ),
    );
    bPath.add(
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(w - r, -h, 0),
        new THREE.Vector3(w, -h, 0),
        new THREE.Vector3(w, -(h - r), 0),
      ),
    );
    bPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(w, -(h - r), 0),
        new THREE.Vector3(w, -g, 0),
      ),
    );

    return { topPath: tPath, bottomPath: bPath };
  }, []);

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <mesh ref={heartEyeRef} visible={false} material={heartMat}>
        <tubeGeometry args={[sharedHeartCurve, 64, 0.0035, 8, true]} />
      </mesh>

      <group ref={normalEyesRef}>
        <mesh material={eyeMat}>
          <tubeGeometry args={[topPath, 20, 0.0035, 8, false]} />
        </mesh>
        <mesh material={eyeMat}>
          <tubeGeometry args={[bottomPath, 20, 0.0035, 8, false]} />
        </mesh>
      </group>
    </group>
  );
}

function generatePbrTexturesAsync(): Promise<{
  colorMap: THREE.CanvasTexture;
  bumpMap: THREE.CanvasTexture;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const size = 512;
      const canvasC = document.createElement("canvas");
      const canvasB = document.createElement("canvas");
      canvasC.width = canvasB.width = size;
      canvasC.height = canvasB.height = size;
      const ctxC = canvasC.getContext("2d");
      const ctxB = canvasB.getContext("2d");

      if (ctxC && ctxB) {
        ctxC.fillStyle = "#e2e8f0";
        ctxC.fillRect(0, 0, size, size);
        ctxB.fillStyle = "#808080";
        ctxB.fillRect(0, 0, size, size);

        for (let i = 0; i < 8000; i++) {
          const x = Math.random() * size;
          const y = Math.random() * size;
          const r = 0.5 + Math.random() * 1.5;
          const isDark = Math.random() > 0.15;

          ctxC.beginPath();
          ctxC.arc(x, y, r, 0, Math.PI * 2);
          ctxC.fillStyle = isDark ? "#334155" : "#f1f5f9";
          ctxC.fill();

          ctxB.beginPath();
          ctxB.arc(x, y, r, 0, Math.PI * 2);
          ctxB.fillStyle = isDark ? "#000000" : "#ffffff";
          ctxB.fill();
        }
      }

      const texC = new THREE.CanvasTexture(canvasC);
      const texB = new THREE.CanvasTexture(canvasB);
      texC.wrapS = texB.wrapS = THREE.RepeatWrapping;
      texC.wrapT = texB.wrapT = THREE.RepeatWrapping;

      texC.repeat.set(6, 3);
      texB.repeat.set(6, 3);
      texC.needsUpdate = true;
      texB.needsUpdate = true;

      resolve({ colorMap: texC, bumpMap: texB });
    }, 0);
  });
}

export function RobotPrototype({
  color = "#e2e8f0",
  pantallaColor = "#00ffc6",
  pantallaBrillo = 1.3,
  blinkCycle = 3.2,
  metalness = 0.05,
}: {
  color?: string;
  pantallaColor?: string;
  pantallaBrillo?: number;
  blinkCycle?: number;
  metalness?: number;
}) {
  const isLovedRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bodyRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  const [textures, setTextures] = useState<{
    colorMap: THREE.CanvasTexture | null;
    bumpMap: THREE.CanvasTexture | null;
  }>({ colorMap: null, bumpMap: null });

  const design = {
    pantallaColor: pantallaColor,
    pantallaGrosor: 3.8,
    pantallaBrillo: pantallaBrillo,
    separacionOjos: 0.07,
    tamañoOrejas: 1.3,
    escalaOjos: 1.1,
    parpadeoFrecuencia: blinkCycle,
    parpadeoDuracion: 0.45,
    colorChasis: color,
    alturaCabeza: 0.6,
  };

  const neckParams = {
    baseR: 0.215,
    baseH: -0.05,
    midR: 0.28,
    midH: 0.02,
    lipBottomR: 0.295,
    lipBottomH: 0.045,
    lipTopR: 0.27,
    lipTopH: 0.055,
    innerR: 0.1,
    innerDropH: 0.0,
  };

  const bodyParams = {
    bodyBevelR: 0.235,
    bodyBevelY: 0.34,
    bodyBevelT: 0.025,
  };

  const config = {
    moveSpeed: 0.3,
    bodyRotSpeed: 8.0,
    headRotSpeed: 16.0,
    bodyTiltX: 0.0,
    bodyTiltY: 0.8,
    headLookX: 0.35,
    headLookY: 1.4,
  };

  useFrame((state, delta) => {
    if (!bodyRef.current || !headRef.current) return;

    const dt = Math.min(delta, 0.1);

    // Subtle gentle floating/hovering motion
    const floatOffset = Math.sin(state.clock.getElapsedTime() * 1.8) * 0.04;

    const tx = state.pointer.x;
    const ty = state.pointer.y;

    // Gentle position displacement towards mouse within canvas
    const targetPosX = tx * 0.3;
    bodyRef.current.position.x = THREE.MathUtils.lerp(
      bodyRef.current.position.x,
      targetPosX,
      config.moveSpeed * dt,
    );
    bodyRef.current.position.y = THREE.MathUtils.lerp(
      bodyRef.current.position.y,
      -0.28 + floatOffset,
      0.1,
    );

    const relativeX = tx - bodyRef.current.position.x * 0.5;

    const bodyTargetRotY = -relativeX * config.bodyTiltY;
    const bodyTargetRotX = -ty * 0.2;
    const bodyTargetRotZ = -relativeX * 0.12;

    bodyRef.current.rotation.y = THREE.MathUtils.lerp(
      bodyRef.current.rotation.y,
      bodyTargetRotY,
      config.bodyRotSpeed * dt,
    );
    bodyRef.current.rotation.x = THREE.MathUtils.lerp(
      bodyRef.current.rotation.x,
      bodyTargetRotX,
      config.bodyRotSpeed * dt,
    );
    bodyRef.current.rotation.z = THREE.MathUtils.lerp(
      bodyRef.current.rotation.z,
      bodyTargetRotZ,
      config.bodyRotSpeed * dt,
    );

    const headTargetRotY = relativeX * config.headLookY;
    const headTargetRotX = -ty * config.headLookX;

    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      headTargetRotY,
      config.headRotSpeed * dt,
    );
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      headTargetRotX,
      config.headRotSpeed * dt,
    );
  });

  useEffect(() => {
    let mounted = true;
    let generatedMaps: {
      colorMap: THREE.CanvasTexture;
      bumpMap: THREE.CanvasTexture;
    } | null = null;

    generatePbrTexturesAsync().then((res) => {
      if (mounted) {
        generatedMaps = res;
        setTextures(res);
      } else {
        res.colorMap.dispose();
        res.bumpMap.dispose();
      }
    });

    return () => {
      mounted = false;
      if (generatedMaps) {
        generatedMaps.colorMap.dispose();
        generatedMaps.bumpMap.dispose();
      }
    };
  }, []);

  const handlePointerDown = (
    e: import("@react-three/fiber").ThreeEvent<PointerEvent>,
  ) => {
    e.stopPropagation();
    isLovedRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      isLovedRef.current = false;
    }, 2000);
  };

  const neckProfile = useMemo(() => {
    const points = [];
    points.push(new THREE.Vector2(neckParams.innerR, neckParams.baseH));
    points.push(new THREE.Vector2(neckParams.baseR, neckParams.baseH));
    points.push(new THREE.Vector2(neckParams.midR, neckParams.midH));
    points.push(
      new THREE.Vector2(neckParams.lipBottomR, neckParams.lipBottomH),
    );
    points.push(new THREE.Vector2(neckParams.lipTopR, neckParams.lipTopH));
    points.push(new THREE.Vector2(neckParams.innerR, neckParams.lipTopH));
    points.push(
      new THREE.Vector2(
        neckParams.innerR,
        neckParams.lipTopH - neckParams.innerDropH,
      ),
    );
    return points;
  }, [neckParams]);

  const headMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#0f172a",
      roughness: 0.3,
      metalness: 0.1,
    });
  }, []);

  if (!textures.colorMap) return null;

  return (
    <group
      ref={bodyRef}
      position={[0, -0.28, 0]}
      onPointerDown={handlePointerDown}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    >
      <mesh castShadow receiveShadow>
        <sphereGeometry
          args={[0.43, 64, 64, 0, Math.PI * 2, Math.PI * 0.15, Math.PI * 0.85]}
        />
        <meshStandardMaterial
          color={design.colorChasis}
          map={textures.colorMap || undefined}
          bumpMap={textures.bumpMap || undefined}
          bumpScale={0.005}
          roughness={0.7}
          metalness={metalness}
          envMapIntensity={0.5}
        />
      </mesh>

      {bodyParams.bodyBevelT > 0 && (
        <mesh
          position={[0, bodyParams.bodyBevelY, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
          receiveShadow
        >
          <torusGeometry
            args={[bodyParams.bodyBevelR, bodyParams.bodyBevelT, 32, 64]}
          />
          <meshStandardMaterial
            color={design.colorChasis}
            map={textures.colorMap || undefined}
            bumpMap={textures.bumpMap || undefined}
            bumpScale={0.005}
            roughness={0.7}
            metalness={metalness}
            envMapIntensity={0.5}
          />
        </mesh>
      )}

      <mesh position={[0, 0.38, 0]} receiveShadow castShadow>
        <latheGeometry args={[neckProfile, 64]} />
        <meshStandardMaterial
          color={design.colorChasis}
          map={textures.colorMap || undefined}
          bumpMap={textures.bumpMap || undefined}
          bumpScale={0.005}
          roughness={0.7}
          metalness={metalness}
          envMapIntensity={0.5}
        />
      </mesh>

      <group ref={headRef} position={[0, design.alturaCabeza, 0]}>
        <mesh material={headMat} castShadow receiveShadow>
          <sphereGeometry args={[0.28, 64, 64, 0, Math.PI * 2, 0, Math.PI]} />
        </mesh>

        <GlassCapsule
          color={design.pantallaColor}
          power={design.pantallaGrosor}
          intensity={design.pantallaBrillo}
        />

        <group position={[0, -0.02, 0.29]}>
          <RobotEye
            position={[-design.separacionOjos, 0, 0]}
            rotation={[0, -0.2, 0]}
            scale={design.escalaOjos}
            blinkDuration={design.parpadeoDuracion}
            blinkCycle={design.parpadeoFrecuencia}
            isLovedRef={isLovedRef}
          />
          <RobotEye
            position={[design.separacionOjos, 0, 0]}
            rotation={[0, 0.2, 0]}
            scale={design.escalaOjos}
            blinkDuration={design.parpadeoDuracion}
            blinkCycle={design.parpadeoFrecuencia}
            isLovedRef={isLovedRef}
          />
        </group>

        <RobotEar
          position={[-0.29, 0, 0]}
          isLeft={true}
          scale={design.tamañoOrejas}
        />
        <RobotEar
          position={[0.29, 0, 0]}
          isLeft={false}
          scale={design.tamañoOrejas}
        />
      </group>
    </group>
  );
}

export interface RobotModelProps {
  color?: string;
  scale?: number;
  pantallaColor?: string;
  pantallaBrillo?: number;
  blinkCycle?: number;
  metalness?: number;
  className?: string;
}

export function RobotModel({
  color = "#f1f5f9",
  scale = 1.0,
  pantallaColor = "#00ffc6",
  pantallaBrillo = 1.25,
  blinkCycle = 3.2,
  metalness = 0.04,
  className = "",
}: RobotModelProps) {
  return (
    <div
      className={`relative w-full h-full select-none ${className}`}
      style={{ touchAction: "none" }}
    >
      {/* Subtle blue accent glow behind the robot */}
      <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-3xl pointer-events-none -z-10" />

      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
          </div>
        }
      >
        <Canvas
          shadows
          camera={{ position: [0, 0.2, 4.8], fov: 38 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          className="w-full h-full"
        >
          {/* Natural clean portfolio lighting */}
          <ambientLight intensity={1.1} color="#ffffff" />

          <directionalLight
            position={[3, 5, 4]}
            intensity={1.2}
            color="#ffffff"
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0005}
          />

          {/* Subtle blue rim light */}
          <directionalLight
            position={[-4, 2, -2]}
            intensity={0.6}
            color="#93c5fd"
          />

          <Environment preset="studio" />

          <ResponsiveGroup scale={scale}>
            <ContactShadows
              position={[0, -0.78, 0]}
              opacity={0.35}
              scale={8}
              resolution={512}
              blur={1.8}
              far={2.5}
              color="#0f172a"
            />
            <RobotPrototype
              color={color}
              pantallaColor={pantallaColor}
              pantallaBrillo={pantallaBrillo}
              blinkCycle={blinkCycle}
              metalness={metalness}
            />
          </ResponsiveGroup>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default RobotModel;
