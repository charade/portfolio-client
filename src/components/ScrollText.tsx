import { useScrollTextStyle } from "../assets/styles/index.styles";

type ScrollTextProps = {
    words : string[]
}
export const ScrollText = ({ words } : ScrollTextProps) => {
    const classes = useScrollTextStyle();

    return(
        <div className = {classes.container}>
            { words.map((word, i) => (
                <div key = {`word-${i}`} className = {classes.word}>
                    { word.split('').map((letter, i) => {
                       return <span key = {`letter-${i}`} className = { classes.letter }>{ letter }</span>
                    })}
                </div>
            ))}
        </div>
    )
}