import { ADD_DATA, ADD_TOKEN } from "./ActionType"
import { ADD_USERNAME } from "./ActionType"

export const addDataToRedux = (payload)=>({
    type:ADD_DATA,
    payload
});

export const addUsername = (payload)=>({
    type:ADD_USERNAME,
    payload
});

export const addToken = (payload)=>({
    type:ADD_TOKEN,
    payload
});