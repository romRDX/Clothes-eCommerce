import React from 'react';

import card4 from '../../assets/Cards/card4.png';
import card5 from '../../assets/Cards/card5.png';
import card6 from '../../assets/Cards/card6.png';
import card7 from '../../assets/Cards/card7.png';

import { Container } from './styles';

const Spotlight = () => {

  return (
    <Container>
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <img src={card4} alt="c4" />
      </div>
      
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div>
          <img src={card5} alt="c5" />
          <img src={card6} alt="c6" />
        </div>
        <img src={card7} alt="c7" />
      </div>
    </Container>
  );
};

export default Spotlight;
