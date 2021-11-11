import { makeStyles } from "@material-ui/core";
import { UPPER_MEDIUM } from "./constants";

const useSoftSkillsStyle = makeStyles(theme => ({
    root : {
        display : 'flex',
        minWidth : '25rem',
        
        paddingLeft : '20px',
        flexDirection : 'column',
        '& > *' : {
            margin : 0
        },
    },
    section : {
        '& > *' : {
            margin : '5px',
            [theme.breakpoints.up('sm')] : {
                margin : '20px'
            }
        },
    },
    text : {
        maxWidth : '300px',
        fontSize : '1.2rem',
        fontWeight : 200,
        [theme.breakpoints.up('xs')] : {
            fontSize : '1.8rem'
        },
        [theme.breakpoints.up('sm')] : {
            fontSize :'2.7rem'
        },
        [theme.breakpoints.up(UPPER_MEDIUM)] : {
            fontSize :'2rem'
        },
    }
}))

export default useSoftSkillsStyle;