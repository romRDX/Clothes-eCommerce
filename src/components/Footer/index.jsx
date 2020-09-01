import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/">About us</Link>
          <Link to="/">Decline rules</Link>
          <Link to="/">Terms & Conditions</Link>
        </LinksContainer>

        <LinksContainer>
          <span>Customer care</span>
          <Link to="/">FAQ</Link>
          <Link to="/">Terms of use</Link>
          <Link to="/">Privacy policy</Link>
          <Link to="/">Discount system</Link>
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
