import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./common.css";

import { setProducts } from "../Redux/actions/productAction.js";

import ProductComponents from "./ProductComponents.js"
import Loading from "./Loading";




const ProductList = () => {
  //useSelector() is used for the reading state from redux store
  const products = useSelector((state) => state.allProducts.products);  //this allProducts is the key in index reducer
  // console.log("Data after dispatching using action and reducer: ", products);
  // console.log(products);


  const [loading, setLoading] = useState(false);
  const [FilterLoading, setFilterLoading] = useState(false);
  const [filter, setFilter] = useState(products);   // for filtering we set product data in "filter":

  const dispatch = useDispatch();  //dispatch Hook

  useEffect(() => {
    dispatch(setProducts());
  }, []);

  const setFilterProduct = (category) => {
    const afterFilterData = products.filter((x) => x.category === category);
    setFilterLoading(true);
    setFilter(afterFilterData);  //set filter value and map over this
  }

  return (
    <div className="product_list" id="products">
      {
        loading ? (
          <div>
            <Loading />
          </div >
        ) :
          (
            <div className="product_list container my-5 py-5">
              <div className="row ">
                <div className="col-12 mb-5 header_title">
                  <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                  <hr />
                </div>
                <div className=" justify-content-center">
                  {loading ? (
                    <div>
                      <Loading />
                    </div>
                  ) : (
                    <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
                      <button className="btn btn-outline-dark me-2 btn_shadow" onClick={() => setFilter(products)}>All</button>
                      <button className="btn btn-outline-dark me-2 btn_shadow" onClick={() => setFilterProduct("men's clothing")} >Men's Collection</button>
                      <button className="btn btn-outline-dark me-2 btn_shadow" onClick={() => setFilterProduct("women's clothing")} >Women's Collection</button>
                      <button className="btn btn-outline-dark me-2 btn_shadow" onClick={() => setFilterProduct("jewelery")} >Jewelry</button>
                      <button className="btn btn-outline-dark me-2 btn_shadow" onClick={() => setFilterProduct("electronics")} >Electronics</button>
                    </div>
                  )}
                  <div className="grid">

                    {FilterLoading ? filter.map((singleProduct) => { //filter is used for filtering. Check FilterLoading
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
                    }) : (
                      products.map((singleProduct) => { // Check FilterLoading false then map over products
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
                      })
                    )}
                  </div>

                </div>
              </div>
            </div>
          )}
    </div>

  );
};

export default ProductList;
