import { Actions } from './actions';

type ScrollAction = {
    scroll : boolean,
    direction : string
};

const initialState = {
    scroll : false,
    direction : ''
};

type ActionType = {
    type : string;
    payload : string
};

export const scrollReducer = (state : ScrollAction = initialState , action : ActionType) => {
    switch(action.type){
        case Actions.SCROLL : return {scroll : true, direction : action.payload};
        case Actions.STOP_SCROLLING : return initialState;
        default : return state
    }
}


