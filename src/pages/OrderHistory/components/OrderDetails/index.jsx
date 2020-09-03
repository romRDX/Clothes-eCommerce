import React from 'react';

import { Container, OrderProducts, BillDetails } from './styles';
import ProductDetails from '../ProductDetails';

const OrderDetails = ({ order }) => {

  return (
    <Container>
      <p>Order ID: <span>{order.orderID}</span> </p>
      <OrderProducts>
        {
          order.products.map((prod)=>(
            <ProductDetails product={prod} />
          ))
        }
      </OrderProducts>
      <BillDetails>
        <span>Bill address: { order.billTo }</span>
        <span>Delivery address: { order.shipTo }</span>
        <span>Final value: ${ order.finalValue }</span>
      </BillDetails>
    </Container>
  );
};

export default OrderDetails;
