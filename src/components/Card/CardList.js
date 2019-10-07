import React from 'react';
import CardItem from './CardItem';

export default function CardList({value}) {
  const {card} = value;
  //   console.log(value, card);

  return (

    <div className="container-fluid">
    {card.map(product => {
      return (
        <CardItem key={product.id} product={product} value={value}/>

      )
    })}
</div>

  )
}
