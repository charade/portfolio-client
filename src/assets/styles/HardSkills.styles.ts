import { makeStyles } from '@material-ui/core';

const useHardSkillsStyle = makeStyles(theme => ({
    root : {
        display : 'flex',
        // border :'2px solid',
        margin : 0,
        width : '90%',
        justifyContent :'center',
        alignSelf : 'center',
        '& > *' : {
            margin : '2%'
        }
    },
    section : {
        display : 'flex',
        // border : '2px solid',
        flexDirection : 'column',
        alignItems : 'center',
        '& > *' : {
            // border :'2px solid red',
            width : '100%'
        },
        '& > ul' :{
            listStyle : 'none',
            padding :0
        }
    },
    block : {

    },
    blockTitle :{
        fontSize :'1.7rem',
    },
    techno : {
        fontSize : '1.7rem'
    },
    divider :{
        height: '300px',
        alignSelf :'center',
        borderRight :'1px solid rgba(255, 255, 255, 0.3)'
    }
}))

export default useHardSkillsStyle;
