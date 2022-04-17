import { ADD_DATA, ADD_USERNAME } from "./ActionType";

export const reducer = (store,{type,payload})=>{

    switch(type){
        case ADD_DATA:
            return {...store,city:payload};
        case ADD_USERNAME:
                return {...store,username:payload};
        default:
            return store;
    }
}