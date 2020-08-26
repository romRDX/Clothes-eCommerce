import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar';
import Logo from '../Logo';
import SocialMedia from '../SocialMedia';

import { } from 'react-bootstrap';

import { Container, Content, Trademark, LinksContainer, FooterBottom } from './styles';

const Footer = () => {

  return (
    <Container
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <NavBar />
      <Content>
        <Trademark>
          <Logo />
          <p>
            Fashion is a popular asthetic expression at a particular time,
            place and in a specific context, especially in clothing, footwear,
            lifestyle, accessories, makeup.
          </p>
        </Trademark>
        <LinksContainer>
          <span>Hot links</span>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </LinksContainer>

        <LinksContainer>
          <span>More info</span>
          <Link to="/">How it works</Link>
          <Link to="/shop">About us</Link>
          <Link to="/blog">Decline rules</Link>
          <Link to="/contact">Terms & Conditions</Link>
        </LinksContainer>

        <LinksContainer>
          <span>Customer care</span>
          <Link to="/">FAQ</Link>
          <Link to="/shop">Terms of use</Link>
          <Link to="/blog">Privacy policy</Link>
          <Link to="/contact">Discount system</Link>
        </LinksContainer>
        
      </Content>
      <FooterBottom>
        <span>© Clay Shop all rights reserved</span>
        <SocialMedia />
      </FooterBottom>
    </Container>
  );
};

export default Footer;
