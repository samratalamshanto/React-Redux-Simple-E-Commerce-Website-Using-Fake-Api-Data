import { ActionTypes } from "../constants/constants.js";
import axios from "axios";

export const setCart = () => async (dispatch) => {
    try {
        const responseCartData = await axios.get("http://localhost:5001/cartdata");
        // console.log(responseCartData);
        dispatch({
            type: ActionTypes.ADD_CART,
            payload: responseCartData,
        });

    } catch (error) {
        console.log(error);

    }
}


export const addCart = (product) => async (dispatch) => {
    try {
        const { id, title, price, category, image, rating, description, qty } = product;

        const newProduct = {
            "productId": product.id,
            "qty": 1
        }
        console.log(qty);
        console.log("new", newProduct);
        let axiosConfig = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(newProduct),
        };

        await axios.post("http://localhost:5001/cartdata", newProduct, axiosConfig).then(() => {
            dispatch({
                type: ActionTypes.ADD_CART,
                payload: product,
            })
        }).catch((err) => {
            // let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
            // console.warn("error", message)

            console.log(err);
        });




    } catch (error) {
        console.log(error)
    }
}


export const incCart = (product) => async (dispatch) => {


    const { id, title, price, category, image, rating, description, qty } = product;
    console.log("hola inc", qty + 1);
    dispatch({
        type: ActionTypes.INC_CART,
        payload: product,
    })

    // const newProduct = {
    //     "productId": product.id,
    //     "qty": qty + 1
    // }
    // console.log(qty);
    // console.log("new", newProduct);
    // let axiosConfig = {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify(newProduct),
    // };

    // await axios.put("http://localhost:5001/cartdata", newProduct, axiosConfig).then(() => {
    //     dispatch({
    //         type: ActionTypes.INC_CART,
    //         payload: product,
    //     })
    // }).catch((err) => {
    //     console.log(err);
    // });

}

export const delCart = (product) => async (dispatch) => {
    try {
        const { id, title, price, category, image, rating, description, qty } = product;
        const newProduct = {
            productId: id,
            qty: qty,
        }

        // if (qty === 1) {
        //     await axios.delete("http://loclhost:5001/cartdata", newProduct);

        // }

        dispatch({
            type: ActionTypes.DEL_CART,
            payload: product,
        })
    } catch (error) {
        console.log(error);

    }

}

export const decCart = (product) => async (dispatch) => {
    try {
        const { id, title, price, category, image, rating, description, qty } = product;
        console.log("hola dec", qty - 1);
        const newProduct = {
            productId: id,
            qty: qty,
        }

        // if (qty !== 1) {
        //     await axios.put("http://loclhost:5001/cartdata", newProduct);

        // }

        dispatch({
            type: ActionTypes.DEC_CART,
            payload: product,
        })
    } catch (error) {
        console.log(error);

    }

}


// cart
// Array(2)
// 0:
// category: "women's clothing"
// description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem"
// id: 18
// image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
// price: 9.85
// qty: 10
// rating: { rate: 4.7, count: 130 }
// title: "MBJ Women's Solid Short Sleeve Boat Neck V "
// [[Prototype]]: Object