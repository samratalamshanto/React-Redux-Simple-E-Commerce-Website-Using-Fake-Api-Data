import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartPlus, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch, } from 'react-redux';
import { setCart } from "../Redux/actions/cartAction.js"
import React, { useEffect, useState } from "react"

function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCart());
  }, [dispatch]);



  const cart = useSelector(state => state.HandelCartReducer.cart);



  return (
    <div className="header">
      <div className="navbar">
        <Navbar bg="light" expand="lg" fixed='top' className="py-3 shadow-sm bg-white">
          <Container >
            <Navbar.Brand to="/" className="fw-bold fs-2 mx-auto header_title"> <h2>Fake Shop BD</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-5 my-lg-0 c-black d-flex fs-4"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavLink className="text-decoration-none c-black me-3" to="/">Home</NavLink>
                <NavLink className="text-decoration-none c-black me-3" to="/product">Products</NavLink>
                <NavLink className="text-decoration-none c-black me-3" to="/about">About</NavLink>
                <NavLink className="text-decoration-none c-black me-3" to="/contact">Contact</NavLink>
              </Nav>
              <div className='buttons'>
                <NavLink to="/login" className="btn  btn-outline-dark bg-info me-1 btn_shadow "><FontAwesomeIcon icon={faRightToBracket} /> LogIn</NavLink>
                <NavLink to="/signup" className="btn btn-outline-dark bg-info me-1 btn_shadow "><FontAwesomeIcon icon={faUserPlus} /> SignUp</NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark bg-info btn_shadow ">
                  <FontAwesomeIcon icon={faCartPlus} />
                  Cart ({cart.length}) {/* unique product shows in cart length */}
                </NavLink>

              </div>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;