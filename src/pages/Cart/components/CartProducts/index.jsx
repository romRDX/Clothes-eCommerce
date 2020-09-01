import React from 'react';

import { FiX } from 'react-icons/fi'

import { Container, ProductDetails, CloseButton } from './styles';

const SuccessMessage = ({ orderDetails, setSuccessMessage}) => {

  return (
    <Container>
      <strong>Your order has been placed successfully</strong>
      { orderDetails &&
      <div>
        <span>Order details</span>
        <p>order ID code: { orderDetails.orderID }</p>
        <p>Bill to: { orderDetails.billTo } </p>
        <p>delivery address: { orderDetails.shipTo }</p>
        <p>products ordered: </p> 
        { 
          orderDetails.products.map((prod)=> (
            <ProductDetails key={prod.id}>
              <p>{prod.quantity} x </p>
              <p>
                <span>{prod.name} </span>
                <span>#{prod.id}</span>
              </p>
              <p>${prod.price}</p>
            </ProductDetails>
          ))
        }
        <p>Shipping charge: ${ orderDetails.shippingCharge }</p>
        <p>sales taxes: { orderDetails.taxes }</p>
        <p>Total products value: ${ orderDetails.totalProductsValue}</p>
        <p>Final value: ${ orderDetails.finalValue }</p> 
      </div>
      }

      <button onClick={() => setSuccessMessage(false)}>OK</button>
      <CloseButton onClick={() => setSuccessMessage(false)}>
        <FiX />
      </CloseButton>
    </Container>
  );
};

export default SuccessMessage;


