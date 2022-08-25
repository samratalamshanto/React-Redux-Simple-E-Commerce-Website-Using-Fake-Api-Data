import { ActionTypes } from "../constants/constants.js";

export const addCart = (product) => {
    return {
        type: ActionTypes.ADD_CART,
        payload: product,
    }
}

export const delCart = (product) => {
    return {
        type: ActionTypes.DEL_CART,
        payload: product,
    }
}