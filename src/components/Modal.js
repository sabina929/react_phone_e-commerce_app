import React, { Component } from 'react'
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";


export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
              {value => {
        const {modalOpen, closeModal} = value;
        const {img, title, price} = value.modalProduct;

        if (!modalOpen) {
          return null
        } else {

          return (<ModalContainer>
                    <div className="container">
                        <div className="row">
                            <div id="modal" className="col-8 mx-auto p-5 col-md-6 col-lg-4 text-center text-capitalize">
                                <h4 className="text-black">Item added to the card</h4>

                                <img src={img} alt="product" className="img-fluid mb-1"/>

                                <h5 className="text-black">{title}</h5>
                                <h5 className="text-muted">Price: ${price}</h5>

                               <Link to="/card">
                                   <ButtonContainer className="mb-2" card onClick={() => closeModal()}>
                                        Go To Card
                                   </ButtonContainer>
                               </Link>
                               <Link to="/">
                                   <ButtonContainer onClick={() => closeModal()}>
                                        Store
                                   </ButtonContainer>
                               </Link>
                            </div>
                        </div>
                    </div>
                                
                      </ModalContainer>)
        }


      }}
      </ProductConsumer>
    )
  }
}


const ModalContainer = styled.div`
   
        position:fixed;
        top: 0;
        left:0;
        right:0;
        bottom:0;
        background-color: rgba(0,0,0,.3);
        display:flex
        justify-content:center;
        align-items:center;
   
        #modal{
                background-color:var(--lightGray);
                border-radius: 5px;
                box-shadow: 0 0px 60px -10px rgba(0,0,0,.3);
            }

`;