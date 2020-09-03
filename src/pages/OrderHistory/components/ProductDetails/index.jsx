import React from 'react';

import { Container, Details, Values } from './styles';

const ProductDetails = ({ product }) => {

  console.log(product);

  return (
    <Container>
      <img src={product.image} alt={product.name} />
      <Details>
        <span>{product.name}</span>
        <div>
          <p>Color: {product.selectedColor}</p>
          <p>Size: {product.selectedSize}</p>
        </div>
      </Details>
      <Values>
        <span>Quantity: {product.quantity}</span>
        <p>Price: ${product.price}</p>
        <div>Total: ${product.price * product.quantity}</div>
      </Values>
    </Container>
  );
};

export default ProductDetails;
