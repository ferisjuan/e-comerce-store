import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import ButtonContainer from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, company, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                {/*Product Title*/}
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/*Product description*/}

              <div className="row">
                {/*Product image*/}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>

                {/*Product text*/}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3>modelo: {title}</h3>
                  <h5 className="text-title text-uppercase text-muted mt-2 mb-2">
                    fabricante: <span className="text-uppercase">{company}</span>
                  </h5>
                  <h5 className="text-blue">
                    <strong>
                      precio: <span>$</span>
                      {price}
                    </strong>
                  </h5>
                  <p className="text-capitalize font-weight mt-3 mb-0">Conoce el producto:</p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div className="">
                    <Link to="/">
                      <ButtonContainer>Vuelve a productos</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart && true}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? 'En el carrito' : 'Añadir al carrito'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
