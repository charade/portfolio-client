import { useGetMeInTouchStyle } from "../assets/styles/index.styles";
import { TextField } from "@material-ui/core";

export const GetMeInTouch = () => {
    const classes = useGetMeInTouchStyle();

    return(
        <div>

            <form className = {classes.form}>
                <TextField
                    variant = 'outlined'
                    required
                    InputProps = {{className : classes.emailField}}
                    type ='text'
                    aria-describedby = "email-area"
                    label = "Your email"
                    InputLabelProps = {{className : classes.emailLabel}}
                />
                <textarea
                    required
                    rows = {8}
                    aria-describedby = "text-message-area"
                    placeholder = 'Your message...'
                    className = {classes.message}
                ></textarea>
                <button 
                    className = {classes.submitBtn}
                    aria-label = 'submit-form'
                    type = "submit"
                >
                    Send
                </button>
            </form>
        </div>
    )
}