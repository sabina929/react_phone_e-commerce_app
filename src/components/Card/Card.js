import React, { Component } from 'react'
import Title from "../Title";
import CardColumns from "./CardColumns";
import EmptyCard from "./EmptyCard";
import { ProductConsumer } from "../../context";
import CardList from "./CardList";

export default class Card extends Component {
  render() {
    return (
      <section id="card-page">
<ProductConsumer>
  {value => {
        const {card} = value;

        if (card.length > 0) {
          return (
            <React.Fragment>
          <Title name="Your" title="Card"/>
          <CardColumns/>
          <CardList value={value}/>
        </React.Fragment>
          )
        } else {
          return (
            <EmptyCard/>
          )
        }


      }}
</ProductConsumer>
        
        

      </section>
    )
  }
}
