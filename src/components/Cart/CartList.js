import React from 'react';
import CartItem from './CartItem';
import { ProductConsumer } from '../../context';

export default function CartList() {
  return (
    <ProductConsumer>
      {value => {
        const { cart } = value;
        const cartItems = cart.map((item, i) => {
          return <CartItem key={i} item={item} value={value} />;
        });
        return <div className="container-fluid">{cartItems}</div>;
      }}
    </ProductConsumer>
  );
}
