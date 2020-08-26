import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import {useTransition, animated} from 'react-spring';

import { Container, Content } from './styles';

const DropDown = () => {

  const [ open,setOpen] = useState(false);

  const transitions = useTransition(open, null, {
    from: { opacity: 0  },
    enter: { opacity: 1  },
    leave: { opacity: 0 },
  })

  return (
    <Container>
      <span onClick={() => setOpen(state => !state)}>
        Shop 
        { open ? <IoIosArrowUp /> : <IoIosArrowDown /> }
      </span>
      { transitions.map(({ item, key, props }) => item && 
        <animated.div 
          key={key}
          style={props}
        >
          <Content isOpen={open}>
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
            <div>
              <Link to="/shop">
                <p>Sales on channel</p>
              </Link>
              
              <Link to="/shop">
                <p>Accessories</p>
              </Link>
            </div>
          </Content>
    
        </animated.div>
      )}
    </Container>
  );
};

export default DropDown;
