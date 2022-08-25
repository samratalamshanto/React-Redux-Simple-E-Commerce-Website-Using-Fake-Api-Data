import { ActionTypes } from "../constants/constants.js";

const initialCart = [];
export const HandelCartReducer = (state = initialCart, { type, payload }) => {
    const product = payload; //we send product to add or delete in action

    switch (type) {
        case ActionTypes.ADD_CART:
            //check if product already exist?
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                //increase the quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x//those id match that will increase others remain same
                );
            } else {
                const product = payload;
                return [   //new add here so different ######################################
                    ...state,
                    {
                        ...product,   //new added in cart with qty value 1
                        qty: 1,
                    }
                ]
            }

            break;
        case ActionTypes.DEL_CART:
            //check deleted product more than one or not
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1)  //if qty 1 then filter out that product
            {
                return state.filter((x) => x.id !== product.id);

            }
            else { //qty more than one so (-1)
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                )
            }
            break;

        default:
            return state; //must needed to do this otherwise "HandelCartReducer" returned undefined during initialization. If the state 
            break;
    }

}