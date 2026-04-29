// Scene.jsx
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Make OrbitControls available as a JSX element
extend({ OrbitControls });

const Controls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    controlsRef.current?.update();
  });

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};

const Scene = () => {
  const cubeRef = useRef();
  const planeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    planeRef.current.rotation.z += delta;
  });

  return (
    <>
      <Controls />
      <mesh position-x={2} ref={planeRef}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="blue" side={THREE.DoubleSide} />
      </mesh>
      <mesh position-x={-5} ref={cubeRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color="red" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default Scene;
