import React, { useState, useEffect } from 'react';

import { get as getOrderHistory } from '../../services/orderStore.js';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OrderDetails from './components/OrderDetails';

import { Container, Content } from './styles';

const OrderHistory = () => {

  const [ orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const orderData = getOrderHistory();

    if(orderData) setOrderHistory(orderData);
  }, [])

  return (
    <Container>
      <Header />
      <p>Order History</p>
      <Content>
        {
          orderHistory.map((order) => (
            <OrderDetails key={order.orderID} order={order} />
          ))
        }
      </Content>
      <Footer />
    </Container>
  );
};

export default OrderHistory;
