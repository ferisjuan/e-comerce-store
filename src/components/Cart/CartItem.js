import React from 'react';

export default function CartList({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { changeQuantity, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          className="img-fluid"
          style={{ width: '5rem', height: '5rem' }}
          alt={title}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className=""> Product: {title}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className=""> price: ${price}</span>
      </div>
      {/* buttons */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => changeQuantity(id, null)}>
              -
            </span>
            <span className="btn btn-black mx-1" style={{ cursor: 'not-allowed' }}>
              {count}
            </span>
            <span className="btn btn-black mx-1" onClick={() => changeQuantity(id, 'add')}>
              +
            </span>
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: ${total}</strong>
      </div>
    </div>
  );
}
