import React, { Component } from 'react';
import { storeProducts, detailProduct } from "./data";


const ProductContext = React.createContext();

//  Provider, Consumer


class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    card: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cardSubTotal: 0,
    cardTax: 0,
    cardTotal: 0

  }


  getProduct = (id) => {
    const product = this.state.products.find(product => product.id === id);
    return product;
  }


  handleDetail = (id) => {
    // console.log("detail")
    const product = this.getProduct(id);
    this.setState(() => {
      return {
        detailProduct: product
      }

    })

  }


  addToCard = (id) => {
    // console.log(`card ${id}`);

    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getProduct(id));

    const product = tempProducts[index];
    product.inCard = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products: tempProducts,
        card: [...this.state.card, product]
      }
    }, () => {
      // console.log(this.state);
    })

  }


  openModal = (id) => {
    const product = this.getProduct(id);
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true
      }
    })
  }

  closeModal = () => {
    this.setState(() => {
      return {
        modalOpen: false
      }
    })
  }



  increment = (id) => {
    console.log('increment');
  }
  decrement = (id) => {
    console.log('decrement');

  }

  removeProduct = (id) => {
    console.log('remove');

  }
  clearCard = () => {
    console.log('clear');

  }


  //  TESTER 
  // tester = () => {
  //   console.log('State products:', this.state.products[0].inCard);
  //   console.log('Data products:', storeProducts[0].inCard);

  //   const tempProducts = [...this.state.products];
  //   tempProducts[0].inCard = true;

  //   this.setState(() => {
  //     return {
  //       products: tempProducts
  //     }
  //   }, () => {
  //     console.log('State products:', this.state.products[0].inCard);
  //     console.log('Data products:', storeProducts[0].inCard);

  //   })
  // }


  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(product => {
      const singleProduct = {
        ...product
      };
      tempProducts = [...tempProducts, singleProduct];
    })

    this.setState(() => {
      return {
        products: tempProducts
      }
    })
  }

  componentDidMount() {
    this.setProducts();
  }



  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCard: this.addToCard,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeProduct: this.removeProduct,
        clearCard: this.clearCard

      }}>
                {this.props.children}
      </ProductContext.Provider>
    )
  }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };