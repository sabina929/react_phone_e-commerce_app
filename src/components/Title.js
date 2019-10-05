import React from 'react';

export default function Title({name, title}) {
  return (
    <div className="row">
            <div className="col-10 mx-auto text-center text-title" style={
    {
      marginTop: "50px",
      marginBottom: "30px"
    }
    }>
<h1 className="text-capitalize font-weight-bold">{name} <strong className="text-blue">{title}</strong></h1>
            </div>
        </div>
  )
}
