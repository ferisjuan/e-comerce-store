// react
import React, { Component } from 'react';

// data
import { storeProducts, detailProduct } from './data';

// Context API to pass information to all components
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct
  };

  handleDetail = () => {
    console.log('Hello from context detail');
  };

  addToCart = () => {
    console.log('hello from context addToCart');
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
