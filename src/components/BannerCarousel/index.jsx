import React, { useState } from 'react';

import { Carousel } from 'react-bootstrap';

import card1 from '../../assets/Cards/card1.png';
import card2 from '../../assets/Cards/card2.png';
import card3 from '../../assets/Cards/card3.png';

import { Container } from './styles';

const BannerCarousel = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        interval={5000}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={card1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={card2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={card3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel> 
    </Container>
  );
};

export default BannerCarousel;
