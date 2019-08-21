import React, { Component } from 'react';

// Context API to pass information to all components
const ProductContext = React.createContext();

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="hello from context">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
