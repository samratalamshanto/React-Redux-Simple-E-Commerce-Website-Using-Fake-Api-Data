
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "./common.css"
import Button from 'react-bootstrap/Button';
import { addCart, delCart, incCart, decCart, setCart } from "../Redux/actions/cartAction"
import { setProducts, selectedProduct } from "../Redux/actions/productAction.js"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";


const Cart = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.HandelCartReducer.cart);
    // const products = useSelector(state => state.allProducts.products);

    const products = useSelector(state => state.allProducts.products);
    const [product, setProduct] = useState(products);
    const [load, setLoad] = useState(true);


    if (load && products.length !== 0) {  //special condition ################# load and length
        setLoad(false);  //false so no other times this if statement will happen #######
        setProduct(products);
    }




    useEffect(() => {
        dispatch(setProducts());
        dispatch(setCart());


    }, [dispatch]);




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
                {(cart.length === 0) ? (<div className="header_title align-center ms-2">
                    <h5>*** No Element has been listed Yet!!!</h5>
                    <NavLink className="text-decoration-none me-3" to="/product"><h4>Go to Products</h4></NavLink>
                </div>) : (<>
                    <div className='cart_content'>
                        {
                            !load && cart?.map((x) => {  //load is the special variable which stop rendering until the product value set

                                var product1 = product && product.filter((y) => y.id === x.productId);
                                //important var used and product && product.filter() #####################
                                var product1 = product1[0];
                                // console.log(product1);


                                return (
                                    <div className="cart_part d-flex btn_shadow" key={x.productId}>
                                        <div className="cart_img btn_shadow me-10">
                                            <img src={product1.image} alt="img" />
                                        </div>
                                        <div className="cart_content bg-white">
                                            <h4 className='my-1'>{product1.category}</h4>
                                            <h2 className='my-2'>{product1.title}</h2>
                                            <h4>Id: {x.productId}</h4>
                                            <div className="cart_price d-flex my-1">
                                                <h4>Quantity: {x.qty}</h4>
                                                <h4>Price: ${product1.price}</h4>
                                            </div>
                                            <h3 className="fw-bold my-3">Total: $({x.qty}X{product1.price}) = ${x.qty * product1.price} </h3>

                                            <div className='my-2 d-flex cart_button '>
                                                { }
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