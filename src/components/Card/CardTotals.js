import React from 'react';
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";


export default function CardTotals({value}) {

  const {cardSubtotal, cardTax, cardTotal, clearCard} = value;


  return (
    <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <ButtonContainer card clearbutton onClick={() => clearCard()} type="button">
                                        Clear Card
                            </ButtonContainer>
                        </Link>
                        <h5><span className="text-title">Subtotal: </span><strong>${cardSubtotal}</strong></h5>
                        <h5><span className="text-title">Tax: </span><strong>${cardTax}</strong></h5>
                        <h5><span className="text-title">Total: </span><strong>${cardTotal}</strong></h5>
                    </div>
                </div>
            </div>
        </React.Fragment>

  )
}
