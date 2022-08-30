<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";

import "./common.css";


const ProductComponents = (props) => {
  const { id, title, price, category, image, rate, count, description } = props;



  return (
    <>
      <div className="product_components btn_shadow" key={id}>
        <Link className="text-decoration-none c-black" to={`/product/${id}`}>
          <div className="col-md-3 mb-4 product_component_content card  text-center mb-4 ">
            <Card style={{ width: '22rem', height: '35rem', backgroundColor: "#e2e8ec" }} >
              <Card.Img style={{ width: '20rem', height: '25rem', padding: '1rem', marginLeft: '0.5rem' }} variant="top" src={image} alt={description} />
              <Card.Body>
                <Card.Title>{title.substring(0, 20)}...</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle> */}
                <Card.Text className="fw-bold fs-4">
                  ${price}
                </Card.Text>
                <Button variant="outline-dark" className="btn btn-outline-dark fw-bold" >Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        </Link>
      </div>
    </>);
};

export default ProductComponents;
=======
import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";

import "./common.css";


const ProductComponents = (props) => {
  const { id, title, price, category, image, rate, count, description } = props;



  return (
    <>
      <div className="product_components btn_shadow" key={id}>
        <Link className="text-decoration-none c-black" to={`/product/${id}`}>
          <div className="col-md-3 mb-4 product_component_content card  text-center mb-4 ">
            <Card style={{ width: '22rem', height: '35rem', backgroundColor: "#e2e8ec" }} >
              <Card.Img style={{ width: '20rem', height: '25rem', padding: '1rem', marginLeft: '0.5rem' }} variant="top" src={image} alt={description} />
              <Card.Body>
                <Card.Title>{title.substring(0, 20)}...</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle> */}
                <Card.Text className="fw-bold fs-4">
                  ${price}
                </Card.Text>
                <Button variant="outline-dark" className="btn btn-outline-dark fw-bold" >Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        </Link>
      </div>
    </>);
};

export default ProductComponents;
>>>>>>> 2c236de3c954992a2a2e8319045359f20d8c953b
