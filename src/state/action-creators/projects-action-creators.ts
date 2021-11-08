import { ProjectAction } from "../actions";
import { ProjectItemType } from "../../utils/projectsDetails";
import { ProjectActiontype } from "../reducers/projectsReducer";
import { Dispatch } from "react";

export const loadProjects = (projects : ProjectItemType[]) =>{
    return (dispatch : Dispatch<ProjectActiontype>) => {
        dispatch({
            type : ProjectAction.LOAD_PROJECTS,
            payload : projects
        })
    }
}