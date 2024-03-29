import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
         { /* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */ }

<Link to="/">
    <img src={logo} alt="logo" className="logo navbar-brand"/>
</Link>

<ul className="navbar-nav align-items-center">
<li className="nav-item ml-5">
    <Link to="/" className="nav-link">Products</Link>
</li>
</ul>

<Link to="/card" className="ml-auto">
    <ButtonContainer card>
       <span className="mr-2"><i className="fas fa-cart-plus"/></span>
        My Card
    </ButtonContainer>
</Link>
      </NavWrapper>
    )
  }
}


const NavWrapper = styled.nav`
  background-color: var(--darkBlue);
  padding: 8px;

  .nav-link {
    font-size: 1.9rem;
    color: var(--lightGray) !important;
    text-transform: capitalize;
   }
`;