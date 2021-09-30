import { useState, Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from '@react-three/drei'
import SoftSkills from '../components/skills/SoftSkills';
import HardSkills from '../components/skills/HardSkills';
import Title from '../components/skills/Title';
import { useSkillsStyle } from '../assets/styles/index.styles';
import MilkyWay from '../components/threeComponents/MilkyWay';
import MainCamera from '../components/threeComponents/MainCamera'
import SpaceSuit from '../components/threeComponents/SpaceSuit';

export default function Skills(){
    const classes = useSkillsStyle();

    const [title, setTitle] = useState<string>('Hard skills');

    return(
        <Canvas
            camera = {{
                fov : 60,
                far : 1000,
                near : 1,
                position : [-20, 0, 100]
            }}
        >
            {/* <ambientLight intensity = {2}/> */}
            <Suspense fallback = {null}>
                <MilkyWay />
                <SpaceSuit />
            </Suspense>
            <OrbitControls />
            <MainCamera />
        </Canvas>
        // <div className = {classes.root}>
        //     <Title title = {title}/>
        //     {SectionSelector(title)}
        // </div>
    )
}

function SectionSelector(title : string){
    switch(title){
        case 'Soft skills' : return <SoftSkills />
        default : return <HardSkills />
    }
}