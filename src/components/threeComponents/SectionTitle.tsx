import { Text } from '@react-three/drei'
import { useThree } from "@react-three/fiber";
import { useMemo, useRef } from 'react';
import { color } from '../../utils/color';

const SM = 540;
const UPPER_MD = 1025;

export const SectionTitle = () => {
    const { size } = useThree();
    const Yvalue = useRef<number>(15);

    const evaluated = useMemo(() => ({
        x : -12 * size.width / size.height,
        scale : size.width < UPPER_MD ? 10.5 : 6 ,
        lineHeight : size.width < SM  ? 2.5 : 4 * size.width / size.height 
    }), [size]);

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
                Get me
            </Text>
            <Text
                position = {[evaluated.x, Yvalue.current - evaluated.lineHeight, -33]}
                font = './fonts/Archivo/Archivo-VariableFont_wdth,wght.ttf'
                color = {color.darkOrange}
                anchorX = "left"
                scale = {evaluated.scale} 
                fontSize = {0.5 * size.width / size.height }
                > 
                in
            </Text>
            <Text
                position = {[evaluated.x, Yvalue.current - 2 * evaluated.lineHeight, -33]}
                font = './fonts/Archivo/Archivo-VariableFont_wdth,wght.ttf'
                color = {color.darkOrange}
                anchorX = "left"
                scale = {evaluated.scale} 
                fontSize = {0.5 * size.width / size.height }
            > 
                touch
            </Text>
        </group>
    )
}