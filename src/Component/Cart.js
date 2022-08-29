import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "./common.css"
import Button from 'react-bootstrap/Button';
import { addCart, delCart, incCart, decCart, setCart } from "../Redux/actions/cartAction"
import { selectedProduct } from "../Redux/actions/productAction.js"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";
import { set } from 'mongoose';


const Cart = () => {
    const dispatch = useDispatch();
    const [cartState, setCartState] = useState([]);
    const [loadingData, setLoadingData] = useState(true);


    const cart = useSelector(state => state.HandelCartReducer.cart);
    // if (cart.length === 0) {
    //     setLoadingData(true);
    // }
    // else {
    //     setLoadingData(false);
    //     setCartState(cart);
    // }

    console.log("cart  ", cart.length);
    // if (cart) {
    //     console.log(cart.data.result);
    //     // setCartState(cart[0].data.result);
    //     console.log("lennnn", cart.length)
    // }



    const Call_Cart_Function = async () => {
        dispatch(setCart());
    }

    useEffect(() => {
        Call_Cart_Function();
    }, [cartState]);





    const handelAddButtonCart = (product) => {
        dispatch(incCart(product));
    }
    const handelDelButtonCart = (product) => {
        const { qty } = product;
        if (qty === 1) {
            dispatch(delCart(product));
        }
        else {
            dispatch(decCart(product));
        }

    }

    return (
        <div className="cart container row  d-flex">
            <h1>Cart List:</h1>
            <hr />
            <div>
                {loadingData && cartState && (cartState.length === 0) ? (<div className="header_title align-center ms-2">
                    <h5>*** No Element has been listed Yet!!!</h5>
                    <NavLink className="text-decoration-none me-3" to="/product"><h4>Go to Products</h4></NavLink>
                </div>) : (<>
                    <div className='cart_content'>
                        {

                            cartState?.map((x) => {
                                return (
                                    <div className="cart_part d-flex btn_shadow" key={x.productId}>
                                        <div className="cart_img btn_shadow me-10">
                                            {/* <img src={x.image} alt="img" /> */}
                                        </div>
                                        <div className="cart_content bg-white">
                                            <h4 className='my-1'>{x.category}</h4>
                                            <h2 className='my-2'>{x.title}</h2>
                                            <h4>Id: {x.productId}</h4>
                                            <div className="cart_price d-flex my-1">
                                                <h4>Quantity: {x.qty}</h4>
                                                <h4>Price: ${x.price}</h4>
                                            </div>
                                            <h3 className="fw-bold my-3">Total: $({x.qty}X{x.price}) = ${x.qty * x.price} </h3>

                                            <div className='my-2 d-flex cart_button '>
                                                <Button variant="outline-dark" onClick={() => handelAddButtonCart(x)} className="btn btn-lg btn-outline-dark me-4 fw-bold">
                                                    <FontAwesomeIcon icon={faPlus} /></Button>
                                                <Button variant="outline-dark" onClick={() => handelDelButtonCart(x)} className="btn btn-lg btn-outline-dark me-2 fw-bold">
                                                    <FontAwesomeIcon icon={faMinus} /></Button>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>

                </>)
                }
            </div>

        </div >

    )
}

export default Cart;