import {ActionTypes} from "../actions/productActions"

const initialState={
    products : [],
};
export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCT:
            return {...state,products:payload};
        default:
            return state;
    }
}

export const selectedproductReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_SET_PRODUCT:
            return {...state,...payload};
        case ActionTypes.REMOVED_SELECTED_SET_PRODUCT:
            return {};
        default:
            return state;
    }
}