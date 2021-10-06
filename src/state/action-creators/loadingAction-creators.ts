import { LoadingAction } from '../actions/index';
import { Dispatch } from 'redux';

export const setLoaded = (bool : boolean) =>{
    return(dispatch : Dispatch) => {
        dispatch({
            type : LoadingAction.LOADED
        })
    }
}