import { Dispatch } from 'redux';
import { ScrollActions } from '../actions/index';

export const scroll = (direction) => {
    return (dispatch : Dispatch) => {
        dispatch({
            type : ScrollActions.SCROLL,
            payload : direction
        })
    }
}

export const stopScrolling = () => {
    return (dispatch) => {
        dispatch({
            type : ScrollActions.STOP_SCROLLING
        })
    }
}