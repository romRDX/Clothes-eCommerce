import React from 'react';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

import { Container } from './styles';

const DropDown = () => {

  return (
    <Container className='socialMedia'>
      <FaInstagram />
      <FaTwitter />
      <FaFacebookF />
    </Container>
  );
};

export default DropDown;
