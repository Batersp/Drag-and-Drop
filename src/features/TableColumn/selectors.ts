import {AppRootStateType} from "../../utils/types";

export const getMentors = (state: AppRootStateType) => state.main[0]
export const getUsers = (state: AppRootStateType) => state.main[1]
export const getState = (state: AppRootStateType) => state.main
