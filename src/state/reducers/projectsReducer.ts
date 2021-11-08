import { ProjectAction } from "../actions";
import { ProjectItemType } from "../../utils/projectsDetails";

export type ProjectActiontype =  {
    type : string,
    payload : ProjectItemType[]
}

export const projectsReducer = (state: ProjectItemType[] = [], action : ProjectActiontype ) => {
    switch(action.type){
        case ProjectAction.LOAD_PROJECTS : 
            state = action.payload;
            return state;
        default : return state
    }
}