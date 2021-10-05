import { Dispatch } from 'redux';
import { Actions } from './actions';

export const scroll = (direction) => {
    return (dispatch : Dispatch) => {
        dispatch({
            type : Actions.SCROLL,
            payload : direction
        })
    }
}

export const stopScrolling = () => {
    return (dispatch) => {
        dispatch({
            type : Actions.STOP_SCROLLING
        })
    }
}