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
    cardSubtotal: 0,
    cardTax: 0,
    cardTotal: 0

  }


  getProduct = (id) => {
    const product = this.state.products.find(product => product.id === id);
    return product;
  }

  // SETTING DETAIL PAGE'S CONTENT
  handleDetail = (id) => {
    // console.log("detail")
    const product = this.getProduct(id);
    this.setState(() => {
      return {
        detailProduct: product
      }
    })
  }

  // ADDING TO THE CARD
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
      this.addTotals();
    })

  }

  // MODAL FUNCTIONALITIES
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
  // END OF MODAL FUNCTIONALITIES


  // CARD FUNCTIONALITIES

  increment = (id) => {
    // console.log('increment');

    let tempCard = [...this.state.card];
    const selectedProduct = tempCard.find(product => product.id === id);
    const index = tempCard.indexOf(selectedProduct);
    const product = tempCard[index];

    product.count = product.count + 1;
    product.total = product.price * product.count;

    this.setState(() => {
      return {
        card: [...tempCard]
      }
    }, () => {
      this.addTotals();
    })

  }
  decrement = (id) => {
    // console.log('decrement');
    let tempCard = [...this.state.card];
    const selectedProduct = tempCard.find(product => product.id === id);
    const index = tempCard.indexOf(selectedProduct);
    const product = tempCard[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeProduct(id);
    } else {
      product.total = product.price * product.count;


      this.setState(() => {
        return {
          card: [...tempCard]
        }
      }, () => {
        this.addTotals();
      })

    }
  }

  removeProduct = (id) => {
    // console.log('remove');
    let tempProducts = [...this.state.products];
    let tempCard = [...this.state.card];

    tempCard = tempCard.filter(product => product.id !== id);

    const index = tempProducts.indexOf(this.getProduct(id));
    let removedProduct = tempProducts[index];

    removedProduct.inCard = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(() => {
      return {
        card: [...tempCard],
        products: [...tempProducts]

      }
    }, () => {
      this.addTotals();
    })

  }

  clearCard = () => {
    // console.log('clear');
    this.setState(() => {
      return {
        card: []
      }
    }, () => {
      this.setProducts();
      this.addTotals();
    })

  }

  addTotals = () => {
    let subtotal = 0;
    this.state.card.map(product => (subtotal += product.total));
    const tempTax = subtotal * 0.28;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;

    this.setState(() => {
      return {
        cardSubtotal: subtotal,
        cardTax: tax,
        cardTotal: total,
      }
    })

  }

  // END OF CARD FUNCTIONALITIES


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