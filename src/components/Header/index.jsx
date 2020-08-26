import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';
import { RiShoppingCart2Line } from 'react-icons/ri';

import NavBar from '../NavBar';
import Logo from '../Logo';
import SocialMedia from '../SocialMedia';

import { Container, Content, HeaderTopBar } from './styles';

const Header = () => {

  const history = useHistory();

  const goToShop = useCallback(()=>{
    history.push('/cart');
  },[history]);

  return (
    <Container>
      <Content>
        <HeaderTopBar>
          <Link to="/">
            <Logo />
          </Link>
          
          <SocialMedia />

          <div>
            <AiOutlineSearch />
            <RiShoppingCart2Line onClick={goToShop} />
          </div>
        </HeaderTopBar>

        <NavBar />
      </Content>
    </Container>
  );
};

export default Header;
