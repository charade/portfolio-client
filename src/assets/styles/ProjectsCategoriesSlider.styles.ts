import { makeStyles } from "@material-ui/core";

const useProjectsCategoriesSliderStyle = makeStyles(theme => ({
    container : {
        position: 'relative',
        display : 'flex',
        alignItems: 'center',
        justifyContent : 'center',
        width : "55%",
        height : '55%',
        // overflow : 'hidden',
        // border  : '2px solid red',
        '& > *' :{
            height :'100%'
        }
    }
}))

export default useProjectsCategoriesSliderStyle; 