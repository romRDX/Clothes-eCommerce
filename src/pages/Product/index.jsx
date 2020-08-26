import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import {
  addProduct,
} from '../../store/cart';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { FiHeart } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai'

import { 
  Container, 
  Content, 
  ProductImage, 
  ProductDetails, 
  MainImage, 
  ImageOptions,
  MiniImage,
  Favorite,
  ProductName,
  ProductReviews,
  ProductDescription,
  DescriptionOption,
  ProductOptions,
  ProductSizes,
  SizeOption,
  ProductColor,
  ProductSellOptions,
  BackToShop,
} from './styles';

const Shop = ({ location }) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const product = useSelector( state => state.products.find( (prod) => prod.id === location.state));
  const cart = useSelector(state => state.cart);

  const [ selectedImage, setSelectedImage] = useState({ img: product.images[0], index: 0 });
  const [ selectedOption, setSelectedOption] = useState('info');
  const [ selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [ error, setError] = useState(false);

  const changeImage = useCallback((direction)=>{
    if(direction === 'prev' && selectedImage.index > 0){
      setSelectedImage({ 
        img: product.images[selectedImage.index - 1],
        index: selectedImage.index - 1,
      })
    }

    if(direction === 'next' && selectedImage.index < product.images.length - 1){
      setSelectedImage({ 
        img: product.images[selectedImage.index + 1],
        index: selectedImage.index + 1,
      })
    }
  },[selectedImage, product]);

  const handleShowError = useCallback(()=> {
    setError(true);

    setTimeout(() => {
      setError(false);
    }, 2000);
  },[]);

  const handleAddToCart = useCallback(()=>{
    if(product.inventory > 0){
      const { id, name, price, images, inventory } = product;
      
      const productOnCart = {
        id,
        name,
        price,
        image: images[0],
        selectedSize,
        selectedColor: 'red',
        quantity: 1,
        inventory,
      }

      if(!cart.products.find(prod => prod.id === productOnCart.id)){
        dispatch(addProduct(productOnCart));
      }
      
      history.push('/cart');
    } else {
      handleShowError();
    }
  },[product, selectedSize, cart.products, history, dispatch, handleShowError]);

  

  return (
    <Container>
      <Header />
      <Content>
        <ProductImage>
          <MainImage>
            <div onClick={() => changeImage('prev')}>
              <IoIosArrowBack />
            </div>
            <img src={selectedImage.img} alt="Product" />
            <div onClick={() => changeImage('next')}>
              <IoIosArrowForward />
            </div>
          </MainImage>
      
          <ImageOptions>
            {
              product.images.map((img, index)=>(
                <MiniImage 
                  onClick={() => 
                  setSelectedImage({img, index})}
                  isSelected={ selectedImage.index === index}
                  key={img}
                >
                  <img src={img} alt="imgOpt" />
                </MiniImage>
              ))
            }
          </ImageOptions>
        </ProductImage>
        <ProductDetails>
            <Favorite>
              <div>
                Popular
              </div>
              <div>
                <FiHeart />
              </div>
            </Favorite>

            <ProductName>
              <span>{ product.name }</span>
              <p># { product.id }</p>
            </ProductName>
            <ProductReviews>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span>132 reviews</span>
            </ProductReviews>
            <ProductDescription>
              <div>
                <DescriptionOption 
                  isSelected={ selectedOption === 'info'} 
                  onClick={()=> setSelectedOption('info')}
                > Info </DescriptionOption>

                <DescriptionOption
                  isSelected={ selectedOption === 'brand'} 
                  onClick={()=> setSelectedOption('brand')}
                > Brand </DescriptionOption>

                <DescriptionOption
                  isSelected={ selectedOption === 'delivery'} 
                  onClick={()=> setSelectedOption('delivery')}
                > Delivery </DescriptionOption>

              </div>
              <div>
                { product.description }
              </div>
            </ProductDescription>
            <ProductOptions>
              <ProductSizes>
                <p>Size</p>
                <div>
                  {
                    product.sizes.map((size)=>(
                      <SizeOption 
                        onClick={() => setSelectedSize(size)}
                        isSelected={ selectedSize === size}
                        key={size}
                      >
                        { size }
                      </SizeOption>
                    ))
                  }
                </div>
              </ProductSizes>
              <ProductColor>
                  <p>Color</p>
              </ProductColor>
            </ProductOptions>
            
            <ProductSellOptions>
                <p>
                 $ {product.price}
                </p>
                <button error={error} onClick={handleAddToCart}>
                  { error ? 'Not enough products' : 'Add to cart' }
                </button>
            </ProductSellOptions>
            
            <BackToShop>
              <Link to="/shop">See more products</Link>
            </BackToShop>
        </ProductDetails>
      </Content>
      <Footer />
    </Container>
  );
};

export default Shop;
