import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FiArrowLeftCircle } from 'react-icons/fi';

import {useTransition, animated} from 'react-spring';

import { Container, MobileCloseButton, OptionTitle } from './styles';

const DropDown = ({ name }) => {

  const [ isOpen,setIsOpen] = useState(false);

  const responsiveAnimation = () => {
    if(window.innerWidth < 830){
      return {
        from: { opacity: 0, transform: "translate(-200%,0)" },
        enter: { opacity: 1, transform: "translate(-100%,0)" },
        leave: { opacity: 0, transform: "translate(-200%,0)" },
      }
    } else {
      return {
        from: { opacity: 0},
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      }
    }
  }

  const transitions = useTransition(isOpen, null, responsiveAnimation());

  return (
    <>
      <OptionTitle onClick={() => setIsOpen(state => !state)}>
        { name }
        { isOpen ? <IoIosArrowUp /> : <IoIosArrowDown /> }
      </OptionTitle>
      { transitions.map(({ item, key, props }) => item && 
        
        <animated.div 
          key={key}
          style={props}
        >
          <Container isOpen={isOpen}>
            <div>
              <span>Products</span>
              <Link to="/shop">
                <p>Clothes</p>
              </Link>

              <Link to="/shop">
                <p>Coats</p>
              </Link>

              <Link to="/shop">
                <p>Shoes</p>
              </Link>
            </div>
            <div>
            <span>Designers</span>
              <Link to="/shop">
                <p>Balenciaga</p>
              </Link>
            
              <Link to="/shop">
                <p>Balmain</p>
              </Link>

              <Link to="/shop">
                <p>Burbery</p>
              </Link>
            </div>
            <div>
            <span>Archived Collections</span>
              <Link to="/shop">
                <p>All products</p>
              </Link>

              <Link to="/shop">
                <p>Accessories</p>
              </Link>

              <Link to="/shop">
                <p>Bags</p>
              </Link>
            </div>

            <MobileCloseButton onClick={() => setIsOpen(state => !state)}>
              <FiArrowLeftCircle />
            </MobileCloseButton>
          </Container>
    
        </animated.div>
      )}
    </>
  );
};

export default DropDown;
