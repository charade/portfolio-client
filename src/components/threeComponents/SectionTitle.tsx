import { Text  } from '@react-three/drei'
import { useThree } from "@react-three/fiber";
import { useMemo, useRef } from 'react';
import { Vector3 } from "three";
import { color } from '../../utils/color';

export const SectionTitle = () => {
    const { size } = useThree();
    const Yvalue = useRef<number>(15);

    const evaluated = useMemo(() => ({
        x : -12 * size.width / size.height,
        scale : size.width < 1025 ? 9 : 6 ,
        lineHeight : size.width < 1025  ? 2.7 : 5
    }), [size])

    return(
        <group >
            <Text
                position = {[evaluated.x, Yvalue.current, -33]}
                font = './fonts/Archivo/Archivo-VariableFont_wdth,wght.ttf'
                color = {color.darkOrange}
                anchorX = "left"
                scale = {evaluated.scale} 
                fontSize = {0.5 * size.width / size.height }
            > 
                What they say
            </Text>
            <Text
                position = {[evaluated.x, Yvalue.current - evaluated.lineHeight, -33]}
                font = './fonts/Archivo/Archivo-VariableFont_wdth,wght.ttf'
                color = {color.darkOrange}
                anchorX = "left"
                scale = {evaluated.scale} 
                fontSize = {0.5 * size.width / size.height }
                > 
                about
            </Text>
            <Text
                position = {[evaluated.x, Yvalue.current - 2 * evaluated.lineHeight, -33]}
                font = './fonts/Archivo/Archivo-VariableFont_wdth,wght.ttf'
                color = {color.darkOrange}
                anchorX = "left"
                scale = {evaluated.scale} 
                fontSize = {0.5 * size.width / size.height }
            > 
                me...
            </Text>
        </group>
    )
}