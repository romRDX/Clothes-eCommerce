import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Carousel } from 'react-bootstrap';

import { Container, ItemContent } from './styles';
import ProductCard from '../ProductCard';

const BannerCarousel = () => {

  const products = useSelector(({products}) => products);
  const [ selectedProducts, setSelectedProducts] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const randomProducts = useCallback(() => {
    var arr = [];
    while(arr.length < 16){
        var r = Math.floor(Math.random() * 20) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    setSelectedProducts(arr);
    
  }, []);

  useEffect(()=>{
    randomProducts();
  },[randomProducts]);

  return (
    <Container
      data-aos="flip-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <span>You may like</span>
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        interval={null}
      >
        <Carousel.Item>
          <ItemContent>
            <ProductCard product={selectedProducts[0] && products[selectedProducts[0] - 1]} />
            <ProductCard product={selectedProducts[1] && products[selectedProducts[1] - 1]} />
            <ProductCard product={selectedProducts[2] && products[selectedProducts[2] - 1]} />
          </ItemContent>
        </Carousel.Item>

        <Carousel.Item>
          <ItemContent>
            <ProductCard product={selectedProducts[3] && products[selectedProducts[3] - 1]} />
            <ProductCard product={selectedProducts[4] && products[selectedProducts[4] - 1]} />
            <ProductCard product={selectedProducts[5] && products[selectedProducts[5] - 1]} />
          </ItemContent>
        </Carousel.Item>

        <Carousel.Item>
          <ItemContent>
            <ProductCard product={selectedProducts[6] && products[selectedProducts[6] - 1]} />
            <ProductCard product={selectedProducts[7] && products[selectedProducts[7] - 1]} />
            <ProductCard product={selectedProducts[8] && products[selectedProducts[8] - 1]} />
          </ItemContent>
        </Carousel.Item>

        <Carousel.Item>
          <ItemContent>
            <ProductCard product={selectedProducts[9] && products[selectedProducts[9] - 1]} />
            <ProductCard product={selectedProducts[10] && products[selectedProducts[10] - 1]} />
            <ProductCard product={selectedProducts[11] && products[selectedProducts[11] - 1]} />
          </ItemContent>
        </Carousel.Item>

      </Carousel> 
    </Container>
  );
};

export default BannerCarousel;
