import { reducer } from "./Reducer";
import { createStore } from "redux";

export const store = new createStore(reducer,{resident:[],username:"",token:"",userId:""});