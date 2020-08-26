import React, { useCallback, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  removeProduct,
  alterProductQuantity,
  resetCart,
} from '../../store/cart';

import {
  addToHistory,
} from '../../store/orderHistory';

import { post as orderStore } from '../../services/orderStore';

import { v4 as uuid } from 'uuid';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FiX } from 'react-icons/fi'

import { 
  Container,
  Content, 
  CartProducts, 
  CartProd, 
  ProdInfo, 
  ProdQuantity,
  QuantityError,
  ProdPrice,
  Costs,
  TotalPrice,
  OrderOptions,
} from './styles';

const Shop = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartProducts = cart.products;

  const salesTaxes = 0.1;
  const shippingCharge = 100;

  const [error, setError] = useState({ state: false, id: null});

  const handleRemoveFromCart = useCallback((id) => {
      dispatch(removeProduct(id));
  }, [dispatch]);

  const showError = useCallback((id)=>{
    setError({ state: true, id: id});

    setTimeout(() => {
      setError({ state: false, id: null});
    }, 2000);
  },[]);

  const handleAlterQuantity = useCallback(( prod, type) => {
    if(type === 'minus' && prod.quantity > 1){
      dispatch(alterProductQuantity({ id: prod.id, quantity: prod.quantity - 1}));
      return;
    }

    if(type === 'plus' && prod.inventory >= prod.quantity + 1){
      dispatch(alterProductQuantity({ id: prod.id, quantity: prod.quantity + 1}));
      return;
    }

    if(prod.inventory < prod.quantity + 1)
      showError(prod.id);
  
  }, [dispatch, showError]);

  const totalAmount = useMemo(()=>{
    let total = 0;

    cartProducts.map((prod) => {
      total = total + (prod.price * prod.quantity);
      return null;
    })

    const finalValue = parseFloat(total * (salesTaxes + 1) + shippingCharge);

    return { initial: total.toFixed(2), final: finalValue.toFixed(2)};
  },[cartProducts, salesTaxes, shippingCharge]);

  const handlePlaceOrder = useCallback(() => {

    if(cart.products.length > 0){
      const newOrder = {
        ...cart,
        orderID: uuid(),
      }
      
      orderStore(newOrder);
      dispatch(addToHistory(newOrder))
    }
    
  },[cart, dispatch]);

  const handleCancelOrder = useCallback(() => {

    dispatch(resetCart())
    
  },[dispatch]);

  return (
    <Container>
      <Header />
      <Content>
        <CartProducts>
          {
            cartProducts.length !== 0 ? cartProducts.map((prod) => (
              <CartProd key={prod.id}>
                <div>
                  <img src={prod.image} alt={prod.name} />
                  <ProdInfo>
                    <span> {prod.name} </span>
                    <span>#{ prod.id} </span>
                    <p>
                      Size
                      <span>{ prod.selectedSize }</span>
                    </p>
                    <p>
                      Color
                      <span>Red</span>
                    </p>
                  </ProdInfo>
                </div>

                <ProdQuantity>
                  <div onClick={()=> handleAlterQuantity(prod,'minus')}>
                    <AiOutlineMinus />
                  </div>
                  <p>{prod.quantity}</p>
                  <div onClick={()=> handleAlterQuantity(prod,'plus')}>
                    <AiOutlinePlus />
                    {
                      error.state && error.id === prod.id &&
                      <QuantityError>
                        Not enough products
                      </QuantityError>
                    }
                    
                  </div>
                </ProdQuantity>

                <ProdPrice>
                  <p><span>$</span> {prod.price}</p>
                  <button onClick={() => handleRemoveFromCart(prod.id)}>
                    <FiX />
                  </button>
                </ProdPrice>
              </CartProd>
            ))
            : <p>No products in your cart</p> 
          
          }
        </CartProducts>
        
        { cartProducts.length > 0 &&
          <>
          <Costs>
            <div>
              <p>Sales taxes</p>
              <div>
                <p>{ `(${salesTaxes * 100}%)` }</p>
                
              </div>
              <div>
                <span>$</span>
                { parseFloat(totalAmount.initial * salesTaxes).toFixed(2)}
              </div>
            </div>

            <div>
              <p>Shipping charge</p>
              
              <div>
                <span>$</span>
                { shippingCharge}
              </div>
            </div>
          </Costs>
        
          <TotalPrice>
            <div>
              <p>Total Amount</p>
              <div>
                <span>$</span>
                { totalAmount.final }
              </div>
            </div>
          </TotalPrice>

          </> //**/*/
        }
        
          <OrderOptions active={ cartProducts.length === 0 }>
            <div>
              <button onClick={ () => history.push('/shop')}>
                To shop
              </button>

              <button onClick={handleCancelOrder}>
                Cancel order
              </button>
            </div>
            
            <button onClick={handlePlaceOrder}>
              Place order
            </button>
          </OrderOptions>
        
      </Content>
      <Footer />
    </Container>
  );
};

export default Shop;
