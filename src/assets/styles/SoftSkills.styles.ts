import { makeStyles } from "@material-ui/core";

const useSoftSkillsStyle = makeStyles(theme => ({
    root : {
        display : 'flex',
        minWidth : '25rem',
        // alignItems : 'center',
        paddingLeft : '20px',
        flexDirection : 'column',
        '& > *' : {
            margin : 0
        },
        [theme.breakpoints.up('xs')] : {
            // minWidth : '40rem',
        }
    },
    section : {
        // border : '2px solid',
        '& > *' : {
            margin : '5px',
            [theme.breakpoints.up('sm')] : {
                margin : '20px'
            }
        },
        '&:nth-child(even)' : {
            // alignSelf : 'flex-end',
            // border :'2px solid'
        }
    },
    text : {
        maxWidth : '300px',
        fontSize : '1.2rem',
        fontWeight : 200,
        [theme.breakpoints.up('xs')] : {
            fontSize : '1.8rem'
        }
    }
}))

export default useSoftSkillsStyle;