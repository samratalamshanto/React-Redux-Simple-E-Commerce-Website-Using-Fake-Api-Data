import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "./common.css"
import Button from 'react-bootstrap/Button';
import { addCart, delCart } from "../Redux/actions/cartAction"

const Cart = () => {
    const cart = useSelector(state => state.HandelCartReducer);
    console.log("cart ", cart);
    const dispatch = useDispatch();
    const handelAddButtonCart = (product) => {
        dispatch(addCart(product));
    }
    const handelDelButtonCart = (product) => {
        dispatch(delCart(product));
    }

    return (
        <div className="cart container row  d-flex">
            <h1>Cart List:</h1>
            <hr />

            <div>
                {
                    cart?.map((x) => {
                        return (
                            <div className="cart_part d-flex btn_shadow" key={x.id}>
                                <div className="cart_img btn_shadow me-10">
                                    <img src={x.image} alt="img" />
                                </div>
                                <div className="cart_content">
                                    <h4 className='my-1'>{x.category}</h4>
                                    <h2 className='my-2'>{x.title}</h2>
                                    <div className="cart_price d-flex my-1">
                                        <h4>Quantity: {x.qty}</h4>
                                        <h4>Price: ${x.price}</h4>
                                    </div>
                                    <h3 className="fw-bold my-3">Total: $({x.qty}X{x.price}) = ${x.qty * x.price} </h3>

                                    <div className='my-2 d-flex cart_button '>
                                        <Button variant="outline-dark" onClick={() => handelAddButtonCart(x)} className="btn btn-lg btn-outline-dark me-4 fw-bold">Add + </Button>
                                        <Button variant="outline-dark" onClick={() => handelDelButtonCart(x)} className="btn btn-lg btn-outline-dark me-2 fw-bold">Del - </Button>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div >

    )
}

export default Cart;