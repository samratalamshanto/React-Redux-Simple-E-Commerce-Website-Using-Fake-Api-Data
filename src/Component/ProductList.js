import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./common.css";

import { setProducts } from "../Redux/actions/productAction.js";

import ProductComponents from "./ProductComponents.js"

const ProductList = () => {
  //useSelector() is used for the reading state from redux store
  const products = useSelector((state) => state.allProducts.products);  //this allProducts is the key in index reducer
  console.log("Data after dispatching using action and reducer: ", products);


  const dispatch = useDispatch();  //dispatch Hook
  //fetching data from fake api
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => console.log(err))
    console.log("Response after fetching ", response.data); //main data
    dispatch(setProducts(response.data));  //dispatch them with the proper actions "setProducts(products)"---method
  }
  useEffect(() => {
    fetchData()
  }, []);


  return (
    <div>
      <h1>ProductList</h1>

      {products?.map((singleProduct) => {
        const { id, title, price, category, image, rating, description } = singleProduct;
        return (<ProductComponents
          key={id}
          id={id}
          category={category}
          rate={rating.rate}
          count={rating.count}
          title={title}
          price={price}
          image={image}
          description={description}
        />);

      })}

    </div>
  );
};

export default ProductList;
