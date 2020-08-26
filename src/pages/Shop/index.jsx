import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

import { Container, Content } from './styles';

const Shop = () => {

  const products = useSelector( state => state.products);

  return (
    <Container>
      <Header />
      <Content>
        {
          products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))
        }
      </Content>
      <Footer />
    </Container>
  );
};

export default Shop;
