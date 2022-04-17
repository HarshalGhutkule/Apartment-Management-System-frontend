import { ADD_DATA } from "./ActionType"
import { ADD_USERNAME } from "./ActionType"

export const addDataToRedux = (payload)=>({
    type:ADD_DATA,
    payload
});

export const addUsername = (payload)=>({
    type:ADD_USERNAME,
    payload
});