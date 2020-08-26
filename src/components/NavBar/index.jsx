import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import DropDown from '../DropDown';

import { Container, Page } from './styles';

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Page active={pathname === '/' ? true : false}>
        <Link to="/">
          Home
        </Link>
      </Page>
      
      <DropDown />

      <Page active={pathname === '/blog' ? true : false}>
        <Link to="/blog">
          Blog
        </Link>
      </Page>

      <Page active={pathname === '/contact' ? true : false}>
        <Link to="/contact">
          Contact
        </Link>
      </Page>
   
    </Container>
  );
};

export default NavBar;
