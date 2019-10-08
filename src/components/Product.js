import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";



export default class Product extends Component {
  render() {
    const {id, title, img, price, inCard} = this.props.product;


    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card m-2">
                { /* CARD IMAGE */ }
               <ProductConsumer>

                 {value => (<div className="img-container p-5" onClick={() => {
          value.handleDetail(id);

        }}>
                
                      <Link to="/details">
                          <img src={img} alt="product" className="card-img-top"/>
                      </Link>
                      <button className="cart-btn" disabled={inCard ? true : false } onClick={() => {
          value.addToCard(id);
          value.openModal(id);
        }}>
                                  {
        inCard ? (<p className="text-capitalize mb-0" disabled>in card</p>) : (<i className="fas fa-cart-plus"/>)
        }
                      </button>
                </div> )}
                
               </ProductConsumer>


                { /* CARD FOOTER */ }

                <div className="card-footer d-flex justify-content-between align-items-center">
                    <p className="align-self-center mb-0">{title}</p>
                    <h5 className="text-blue mb-0"><span className="mr-1">$</span>{price}</h5>
                </div>
            </div>           
      </ProductWrapper>
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCard: PropTypes.bool
  }).isRequired
}


const ProductWrapper = styled.div`
      .card {
        border-width: 0px;
        border-color:transparent;
        transition: all .5s ease;
      }

      .card-footer {
        background:transparent;
        border-top: none;
        transition: all .5s ease;
        font-size: 1.1rem;
      }
      .card-footer h5.text-blue.mb-0 {
        font-weight:bold !important;
      }

      &:hover {
        .card {
          box-shadow: 0 0px 40px -10px rgba(6, 38, 57, .2);
          transform: translateY(-5px);
        }

        .card-footer {
          background:rgba(15, 99, 147);
          color:white;

          h5.text-blue.mb-0 {
            color:#edf4ea;
          }
        }
        
      }


        .img-container {
          position: relative;
          overflow:hidden;

           .card-img-top {
              transition: all .5s ease;
            }

            
          .cart-btn {
            position: absolute;
            right:0;
            top: 20px;
            padding: .2rem .8rem;
            background: var(--mainRed);
            border:none;
            opacity:0;
            transform: translateX(101%);
            transition: all .5s ease;
            color: white;
            border-radius: 5px 0 0 5px; 
            outline: none;
            &:hover {
                 background: var(--lightBlue);
            }
            &:active {
               background: var(--mainBlue);
            }
          }


        &:hover {
            .card-img-top {
              transform: scale(1.2);
            }

            .cart-btn {
              opacity:1; 
               transform: translateX(0%);
            }
        }

        }

`;