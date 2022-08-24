import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; //to get param value---param Hooks
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedReducer } from "../Redux/actions/productAction";

import "./common.css"

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
  return (

    <div className="product_details" key={id}>
      <h1>Product Details:</h1>
      {Object.keys(product).length === 0 ? (
        <div><h1>Loading.....</h1></div>
      ) : (
        <div>
          <div className="img_part">
            <img src={image} alt={description} />
          </div>
          <div className="content_text">
            <h4>Category: {category}</h4>
            <h3>{title}</h3>
            <h3>Price: ${price}</h3>
          </div>
          <div className="content_description">
            <h4>Description: {description}</h4>
          </div>
          <div className="content_rate">
            <h3>Rating: {rating.rate} out of 5  </h3>
            <h3>Total Review: {rating.count}</h3>
          </div>
          <div>
            <button>
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>

  );
};

export default ProductDetails;
