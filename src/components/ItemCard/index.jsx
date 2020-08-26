import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Card } from 'react-bootstrap';

import { Container } from './styles';

const ItemCard = ({ product }) => {

  const history = useHistory();

  const seeDetails = useCallback(()=>{
    if(product.id){
      history.push(`/product/${product.id}`, product.id);
    }
  },[product, history]);

  return (
    <Container onClick={seeDetails}>
      { product && 
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.images[0]} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
          </Card.Body>
        </Card>
      }
      
    </Container>
  );
};

export default ItemCard;
