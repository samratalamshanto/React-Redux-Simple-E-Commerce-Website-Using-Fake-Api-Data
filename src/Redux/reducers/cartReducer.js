
import { ActionTypes } from "../constants/constants.js";

const initialCart = {
    cart: [],
};


// createdAt: "2022-08-29T05:42:29.094Z"
// productId: 20
// qty: 1
// updatedAt: "2022-08-29T05:42:29.094Z"
// __v: 0
// _id: "630c51c49c2b178b7529ef25"

export const HandelCartReducer = (state = initialCart, { type, payload }) => {
    // const product = payload; //we send product to add or delete in action

    switch (type) {
        case ActionTypes.SET_CART:  //get cart data
            // const cart = payload;
            return {
                ...initialCart, cart: [...initialCart.cart, payload] //get cart data
            }
            break;



        case ActionTypes.ADD_CART:
            //add new data with qty 1
            const product = payload;
            //new add array type here so different ######################################


            return {
                cart: payload  //new added in cart with qty value 1

            }

            break;

        case ActionTypes.INC_CART:
            // createdAt: "2022-08-27T13:53:09.928Z"
            // productId: 4
            // qty: 1
            // updatedAt: "2022-08-27T13:53:09.928Z"
            // __v: 0
            // _id: "630a21c53a2e4226fdccc0ec"
            //payload

            //check if product already exist?

            const product1 = payload;
            const exist1 = state.cart.find((x) => x.productId === product1.productId);
            if (exist1) {
                //increase the quantity

                return {
                    ...state,
                    cart: state.cart.map((x) =>
                        x.productId === product1.productId ? { ...x, qty: x.qty + 1 } : x //those id match that will increase others remain same
                    )
                }
            }


            break;

        case ActionTypes.DEL_CART:
            //check deleted product more than one or not
            const product2 = payload;
            const exist2 = state.cart.find((x) => x.productId === product2.productId);
            if (exist2.qty === 1)  //if qty 1 then filter out that product
            {
                return {
                    ...state,
                    cart: state.cart.filter((x) => x.productId !== product2.productId)

                }
            }
            break;

        case ActionTypes.DEC_CART:
            //check deleted product more than one or not
            // console.log("state", state.cart);
            const product3 = payload;
            const exist3 = state.cart.find((x) => x.productId === product3.productId);
            if (exist3.qty !== 1) {  //qty more than one so (-1)
                return {
                    ...state,
                    cart: state.cart.map((x) =>
                        x.productId === product3.productId ? { ...x, qty: x.qty - 1 } : x
                    )
                }
            }
            break;

        default:
            return state; //must needed to do this otherwise "HandelCartReducer" returned undefined during initialization. If the state 
            break;
    }
}
