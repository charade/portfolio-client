import { makeStyles } from "@material-ui/core";

const useProjectsCategoriesSliderStyle = makeStyles(theme => ({
    container : {
        display : 'flex',
        alignItems: 'center',
        width : "100%",
        height : '380px',
        overflowX : 'scroll',
        [theme.breakpoints.up('sm')] : {
            justifyContent : 'center', 
        },
    }
}))

export default useProjectsCategoriesSliderStyle; 