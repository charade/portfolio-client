import { useGetInTouchStyle } from "../assets/styles/index.styles";
import { TextField } from "@material-ui/core";
import { sendMessage } from "../service";
import { FieldsType } from "../service/message";
import React, { useCallback, useState } from "react";
import { Notification, NotificationType } from "./Notification";

export const GetInTouch = () => {
    const [fields, setFields] = useState<FieldsType>();
    const classes = useGetInTouchStyle();
    const [notification, setNotification] = useState<NotificationType>({severity: "success", message: ''});
    const [openNotif, setOpenNotif] = useState<boolean>(false);
    
    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        setFields({...fields, [target.name] : target.value})
    };
    const handleSubmit = useCallback(async(e : React.SyntheticEvent) => {
        e.preventDefault();
        if(fields.email && fields.message){
            const response = await sendMessage(fields).catch(error => {
                setNotification({severity: "warning", message :"email adress not found"});
            });
            response && setNotification({severity: "success", message :"successfully sent"});
        }
        else{
            setNotification({severity: "warning", message :"you should fullfill every fields"});
        }
        setOpenNotif(true)
    },[fields]);

    return(
        <>
            <form className = {classes.form} onSubmit = { handleSubmit }>
                <input
                    type ='text'
                    onChange = { handleChange }
                    required
                    aria-describedby = "email-area"
                    name = "email"
                    className = {classes.emailField}
                    placeholder = "Your email adress"
                />
                <textarea
                    onChange = { handleChange }
                    required
                    rows = {9}
                    aria-describedby = "text-message-area"
                    placeholder = 'Your message...'
                    className = {classes.message}
                    name = "message"
                ></textarea>
                <button 
                    className = {classes.submitBtn}
                    aria-label = 'submit-form'
                    type = "submit"
                >
                    Send
                </button>
            </form>
            <Notification   
                open = {openNotif} 
                setOpen = {setOpenNotif}
                severity = { notification.severity }
                message = { notification.message }
            />
        </>
    )
}