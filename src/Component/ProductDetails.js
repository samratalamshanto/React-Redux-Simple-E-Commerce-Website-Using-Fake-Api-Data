import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; //to get param value---param Hooks
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedReducer } from "../Redux/actions/productAction";
import Loading from "./Loading";
import "./common.css"
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar, faStarHalf, faFaceGrinStars } from '@fortawesome/free-solid-svg-icons'






const ProductDetails = () => {
  const { productId } = useParams();

  const product = useSelector((state) => state.singleProduct); //this SingleProduct is the key in index reducer
  console.log(product);
  const { id, title, price, category, image, rating, description } = product;

  const dispatch = useDispatch();
  const productDetails = async () => {

    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => console.log(err));
    dispatch(selectedProduct(response.data));

  }

  useEffect(() => {
    if (productId && productId !== "") productDetails();  //need to check conditions
    return () => {  //#################### special #####################
      dispatch(removeSelectedReducer());  //for removing the last product
    }

  }, [productId])  //called useEffect when new id came 
  //Object.keys(product).length === 0 
  return (

    <div className="product_details container" key={id}>
      <div className="row">
        <h1>Product Details:</h1>
        <hr />
        {Object.keys(product).length === 0 ? (
          <div><Loading /></div>
        ) : (
          <div className="d-flex">
            <div className="img_part p-6 btn_shadow">
              <img src={image} alt={description} />
            </div>
            <div className="container row ">
              <div className="content_text my-6 py-6">
                <h4 className="text-uppercase text-black-50">Category: {category}</h4>
                <h3 className="display-7 fw-bold my-4">Price: ${price}</h3>
                <h3 className="display-5">{title}</h3>
                <h4 className="lead">{description}</h4>

                <div className="d-flex rating">
                  <h3 className="display-9">Rating: {rating.rate} <FontAwesomeIcon icon={faStar} />   </h3>
                  <h3 className="display-9 me-5">Total Reviews: {rating.count}</h3>
                </div>



                <div className="d-flex details_button">
                  <Button variant="outline-dark" className="btn btn-lg btn-outline-dark fw-bold d-flex align-items-center btn_shadow"><FontAwesomeIcon icon={faCartShopping} /> Add To Cart</Button>
                </div>
              </div>
            </div>


          </div>
        )}
      </div>

    </div>

  );
};

export default ProductDetails;
