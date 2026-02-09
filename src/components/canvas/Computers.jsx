import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
    // Using a placeholder box or generic mesh first, then we can replace with a cool GLTF model
    // Ideally we load a 'sci-fi' computer or similar model. 
    // For now, let's make a cool floating composed mesh.

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
                <mesh>
                    <boxGeometry args={[2.5, 2.5, 2.5]} />
                    <meshStandardMaterial color="#915eff" wireframe />
                </mesh>
                <mesh position={[-3, 1, -1]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color="#00f3ff" wireframe />
                </mesh>
                <mesh position={[3, -1, -2]}>
                    <dodecahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial color="#bc13fe" wireframe />
                </mesh>
            </Float>
        </group>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
