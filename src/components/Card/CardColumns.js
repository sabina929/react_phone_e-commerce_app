import React from 'react'

export default function CardColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
              <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase text-black">Products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase text-black">Name of product</p>
                </div><div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase text-black">Price</p>
                </div><div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase text-black">Quantity</p>
                </div><div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase text-black">Remove</p>
                </div><div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase text-black">Total</p>
                </div>
              </div>
        </div>
  )
}
