import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {useTransition, animated} from 'react-spring';

import DropDown from '../DropDown';
import SocialMedia from '../SocialMedia';

import { FiMenu } from 'react-icons/fi';

import { Container, Content, Page, BurgerMenu } from './styles';

const NavBar = () => {
  const { pathname } = useLocation();

  const [ isOpen, setIsOpen] = useState(window.innerWidth > 830 && true);

  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: "translate(-100%,0)" },
    enter: { opacity: 1, transform: "translate(0%,0)" },
    leave: { opacity: 0, transform: "translate(-100%,0)" },
  })

  

  return (
    <Container>

      { transitions.map(({ item, key, props }) => item && 
          
      <animated.div 
        key={key}
        style={props}
      >

      <Content>
        <Page active={pathname === '/' ? true : false}>
          <Link to="/">
            Home
          </Link>
        </Page>
        
        <DropDown name={'Shop'} />

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

        <SocialMedia />
      
      </Content>

      </animated.div>
      )}

      <BurgerMenu onClick={() => setIsOpen( state => !state)}>
        <FiMenu />
      </BurgerMenu>
    </Container>
  );
};

export default NavBar;
