import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Nuestros" title="productos" />
            {/* product row */}
            <div className="row" />
          </div>
        </div>
      </Fragment>
    );
  }
}
