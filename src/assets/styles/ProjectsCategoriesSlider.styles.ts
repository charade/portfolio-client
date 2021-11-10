import { makeStyles } from "@material-ui/core";

const useProjectsCategoriesSliderStyle = makeStyles(theme => ({
    container : {
        position: 'relative',
        display : 'flex',
        alignItems: 'center',
        width : "100%",
        height : '380px',
        overflowX : 'scroll',
        padding : '5px 0',
        border  : '2px solid red',
        [theme.breakpoints.up('sm')] : {
           justifyContent : 'center', 
           overflow : "hidden"
        }
    }
}))

export default useProjectsCategoriesSliderStyle; 