import React, { Component } from 'react';

export default class CartColumns extends Component {
  render() {
    const titles = ['product', 'name of products', 'price', 'quantity', 'remove', 'total'];
    const titlesDiv = titles.map((title, i) => {
      return (
        <div key={i} className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">{title}</p>
        </div>
      );
    });
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">{titlesDiv}</div>
      </div>
    );
  }
}
