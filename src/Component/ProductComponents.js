import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Badge, Stack } from '@chakra-ui/react';

import "./common.css";

const ProductComponents = (props) => {
  const { id, title, price, category, image, rate, count, description } = props;


  return (
    <>
      <div className="product_components" key={id}>
        <Link to={`/product/${id}`}>
          <div className="img_part">
            <img src={image} alt={description} />
          </div>
          <div className="content_text">
            <h4>Category: {category}</h4>
            <h3>{title}</h3>
            <h3>Price: ${price}</h3>
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
        </Link>
      </div>
    </>);
};

export default ProductComponents;
