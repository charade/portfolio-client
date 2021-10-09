import { makeStyles } from '@material-ui/core';

const useHardSkillsStyle = makeStyles(theme => ({
    root : {
        display : 'flex',
        transformOrigin : 'top left',
        justifyContent : 'center',
        '& > *' : {
            margin : '15px'
        }        
    },
    section : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        '& > ul' :{
            listStyle : 'none',
            padding : 0
        }
    },
    block : {
    },
    
    techno : {
        fontSize : '1.8rem',
        fontWeight : 400,
        [theme.breakpoints.up('sm')] : {
            margin : '10px',
        }
    },
    divider :{
        height: '200px',
        alignSelf :'center',
        borderRight :'1px solid rgba(255, 255, 255, 0.7)'
    }
}))

export default useHardSkillsStyle;
