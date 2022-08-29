import { ActionTypes } from "../constants/constants.js";

const initialCart = {
    cart: [],
};
export const HandelCartReducer = (state = initialCart, { type, payload }) => {
    // const product = payload; //we send product to add or delete in action

    switch (type) {
        case ActionTypes.SET_CART:  //get cart data
            // const cart = payload;
            return {
                ...initialCart, cart: payload //get cart data
            }
            break;



        case ActionTypes.ADD_CART:
            //add new data with qty 1
            const product = payload;
            //new add array type here so different ######################################


            return {
                cart: payload,   //new added in cart with qty value 1
                qty: 1
            }


            break;

        case ActionTypes.INC_CART:
            //check if product already exist?
            const product1 = payload;
            const exist1 = state.find((x) => x.id === product1.id);
            if (exist1) {
                //increase the quantity
                return state.map((x) =>
                    x.id === product1.id ? { ...x, qty: x.qty + 1 } : x //those id match that will increase others remain same
                );
            }
            break;

        case ActionTypes.DEL_CART:
            //check deleted product more than one or not
            const product2 = payload;
            const exist2 = state.find((x) => x.id === product2.id);
            if (exist2.qty === 1)  //if qty 1 then filter out that product
            {
                return state.filter((x) => x.id !== product2.id);

            }
            break;

        case ActionTypes.DEC_CART:
            //check deleted product more than one or not
            const product3 = payload;
            const exist3 = state.find((x) => x.id === product3.id);
            if (exist3.qty !== 1) {  //qty more than one so (-1)
                return state.map((x) =>
                    x.id === product3.id ? { ...x, qty: x.qty - 1 } : x
                )
            }
            break;

        default:
            return state; //must needed to do this otherwise "HandelCartReducer" returned undefined during initialization. If the state 
            break;
    }

}