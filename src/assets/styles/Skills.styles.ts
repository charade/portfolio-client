import { makeStyles } from '@material-ui/core';

const useSkillsStyle = makeStyles(theme => ({
    root :{
        display : 'flex',
        flexDirection : 'column',
        padding : '100px 0 100px 15% ',
        // paddingTop: '100px',
        // paddingLeft: '15%',
        // border :'2px solid',
        overflow : 'hidden',
        height :'100%',
        '& > *' :{
            margin :0
        }
    },
    title :{
        position : 'relative',
        fontSize : '3rem',
        fontWeight : 500,
        borderBottom : '1px solid rgba(255, 255, 255, 0.3)',
        lineHeight : '30px',
        width : '16%'
    }
}))

export default useSkillsStyle;