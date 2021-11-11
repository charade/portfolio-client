import { color } from "./color";

export type SoftSkillsType = {
    label : string
    description : string
    underlineColor : string
}

export const softsSkills: SoftSkillsType[]  = [
    {
        label : 'team Player',
        description :"what is better than pair-programming ? or knowledges sharing ?",
        underlineColor : color.gray,
    },
    {
        label : 'self-taught',
        description : "I'm one of those who spend their free time learning new things.",
        underlineColor : color.lightGreen,
    },
    {
        label : 'Challenge-seeker',
        description : "Constantly discovering new issues, new concepts, is what i like the most in programming.",
        underlineColor : color.lightBlue ,
    }
]

