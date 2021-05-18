import {ActionTypes} from "../contants/actionType";
export { ActionTypes }
export const setProducts=(products)=>{
return{ type : ActionTypes.SET_PRODUCT,
    payload : products
}
};
export const SelectProducts=(product)=>{
    return { type : ActionTypes.SELECTED_SET_PRODUCT,
        payload :  product
    }
    };

    export const RemoveSelectProducts=(removeproduct)=>{
        return{ type : ActionTypes.REMOVED_SELECTED_SET_PRODUCT,
            payload :  removeproduct
        }
        };

      