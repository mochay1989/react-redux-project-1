import {ActionTypes} from "../actions/productActions"

const initialState={
    products : [{
        id:1,
        title:"Dispesh",
        category:"programmer"
    }],
};
export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCT:
            return state;
        default:
            return state;
    }
}