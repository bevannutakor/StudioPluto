//import { useFrame } from '@react-three/fiber';
import { useRef } from "react";



export default function Sphere(){
    const sphereRef = useRef();

    useFrame(() => {
        sphereRef.current.rotation.x += 0.005;
        sphereRef.current.rotation.y += 0.01;
    })

    return(
        <mesh ref={sphereRef} visible castShadow>
            <sphereGeometry args={[2.5]} />
            <meshStandardMaterial
                color="blue"
                wireframe
            />
        </mesh>
    )
}