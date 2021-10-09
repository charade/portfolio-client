import { SwitchAboutSectionsAction } from '../actions/index';

type StateType = {
    label : string,
    position : number
};

type Action = {
    type : string,
    payload : StateType
};


const INITIAL = {label : '', position : 0};

export const switchAboutSectionsReducer = (state : StateType = INITIAL, action : Action) =>{
    switch(action.type){
        case SwitchAboutSectionsAction.SWITCH : return {label : action.payload.label, position : action.payload.position};
        default : return state;
    }
}