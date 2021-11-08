import React from "react";
import { useCardStyle } from "../assets/styles/index.styles";

type CardProps = {
    children ?: React.ReactNode
}
export const Card = (props : CardProps) => {
    const classes = useCardStyle();

    return(
        <div className = {classes.cardContainer}>
            <div className = {classes.lowerLayer}></div>
            <svg className = {classes.middleLayer}>

            </svg>
            <div className = {classes.upperLayer}></div>
        </div>
    )
}