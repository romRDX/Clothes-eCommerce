import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BannerCarousel from '../../components/BannerCarousel';
import SuggestionCarousel from '../../components/SuggestionCarousel';
import ProductsCarousel from '../../components/ProductsCarousel';

import { Container, Content } from './styles';
import Spotlight from '../../components/Spotlight';

const Dashboard = () => {

  return (
    <Container>
      <Header />
      <BannerCarousel />
      <Content>
        
        <Spotlight />
        <SuggestionCarousel />
        <ProductsCarousel />
      </Content>
      <Footer />
    </Container>
  );
};

export default Dashboard;
