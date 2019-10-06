import React, { Component } from 'react';
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";


export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
        // console.log(value.detailProduct);
        const {id, company, img, price, info, title, inCard} = value.detailProduct;

        return (
          <div className="container py-5">
            { /* title */ }
              <div className="row">
                <div className="col-10 mx-auto text-center text-title my-5">
                  <h1 className="text-title">{title}</h1>
                </div>
              </div>
            { /* end of title */ }

            { /* product info */ }
              <div className="row">
               { /* product image */ }
               <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid"/>
               </div>
               { /* product text */ }
               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                 <h2>Model: {title}</h2>
                 <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Made by: <span className="text-uppercase">{company}</span></h4>
                <h4 className="text-blue"><strong>Price: ${price}</strong></h4>

                <h5 className="text-capitalize font-weight-bold mt-4 mb-1">Some info about product</h5>
                <p className="text-muted lead">{info}</p>
                { /* buttons */ }
                <div>
                  <ButtonContainer card disabled={inCard ? true : false} onClick={() => {
            value.addToCard(id)
          }}>
                    {inCard ? 'In Card' : 'Add To Card'}
                  </ButtonContainer>
                  <Link to="/">
                    <ButtonContainer>
                      Back To Products
                    </ButtonContainer>
                  </Link>
                  
                </div>
                </div>
              </div>
            { /* end of product info */ }
          </div>
        )
      }}
      </ProductConsumer>
    )
  }
}
