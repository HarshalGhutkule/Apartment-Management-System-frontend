import { ADD_DATA, ADD_TOKEN, ADD_USERID, ADD_USERNAME } from "./ActionType";

export const reducer = (store,{type,payload})=>{

    switch(type){
        case ADD_DATA:
            return {...store,resident:payload};
        case ADD_USERNAME:
                return {...store,username:payload};
        case ADD_TOKEN:
            return {...store,token:payload};
        case ADD_USERID:
            return {...store,userId:payload};
        default:
            return store;
    }
}