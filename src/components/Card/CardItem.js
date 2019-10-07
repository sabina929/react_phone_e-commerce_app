import React from 'react'

export default function CardItem({product, value}) {

  const {id, title, img, price, total, count} = product;
  const {increment, decrement, removeProduct} = value;

  return (
    <div className="row my2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="product" className="img-fluid" style={{
      width: "5rem",
      height: "5rem"
    }}/>
            </div>


            <div className="col-10 mx-auto col-lg-2">
                <div id="wrapper">
                    <span className="d-lg-none">Product: </span>{title}
                    </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
              <div id="wrapper">
                  <span className="d-lg-none">Price: </span>${price}
                  </div> 
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-dark-blue mx-1" onClick={() => decrement(id)}>-</span>
                        <span className="btn btn-dark-blue mx-1">{count}</span>
                        <span className="btn btn-dark-blue mx-1" onClick={() => increment(id)}>+</span>
                    </div>
                </div>
            </div>


            <div className="col-10 mx-auto col-lg-2">
    <div id="wrapper"><div className="card-icon"><i className="fas fa-trash" onClick={() => removeProduct(id)}></i></div></div>
             
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <div id="wrapper">

              <strong>Product total: ${total}</strong>
                </div>
            </div>
    </div>
  )
}
