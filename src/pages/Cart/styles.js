import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--black);
  background: var(--gray-1);
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 40px auto;
  background: var(--white);
  border-radius: 16px;
  /* position: relative; */
`;

export const CartProducts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  min-height: 200px;

  > div + div {
    border-top: 1px solid var(--gray-2);
  }

  > p {
    font-size: 45px;
    margin: auto;
  }
`;

export const CartProd = styled.div`
  display: flex;
  padding: 32px 0;
  justify-content: space-between;

  > div {
    display: flex;

    img {
      height: 120px;
      margin-right: 50px;
    }
  }
  
`;

export const ProdInfo = styled.div`
  
  > span {
    font-family: 'Playfair Display';
    font-size: 24px;
    line-height: 23px;
    margin-bottom: 12px;
    display: block;

    &:nth-child(2) {
      font-size: 14px;
      letter-spacing: 2.5px;
      color: var(--gray-6);
    }
  }

  > p {
    font-family: 'Mulish';
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 14px;
    display: flex;
    height: fit-content;

    > span {
      margin-left: 8px;
      font-family: 'Mulish';
      font-size: 16px;
      line-height: 24px;
      color: var(--gray-6);
    }
  }
`;

export const ProdQuantity = styled.div`

  display: flex;
  align-items: center;
  position: relative;
  

  > p {
    margin: 0 16px;
    user-select: none;
  }

  div {
    padding: 7px;
    border: 2px solid var(--gray-4);
    border-radius: 16px;
    height: fit-content;
    cursor: pointer;

    svg {
      width: 24px;
      height: 24px;
      color: var(--gray-4);
    }

    &:last-child {

      svg {
        color: var(--pink);
      }
    }
  }
`;

export const QuantityError = styled.div`
  position: absolute;
  right: -140px;
  top: 36px;
  width: fit-content !important;
  height: fit-content !important;
  padding: 5px;
  cursor: initial !important;
  user-select: none;
  font-family: 'Mulish';
  font-weight: bold;
  border: 2px solid var(--red) !important;
  background: var(--pink-2);
`;

export const ProdPrice = styled.div`
  display: flex;
  align-items: center;

  > p {
    font-family: 'Playfair Display';
    font-size: 34px;
    line-height: 45px;
    letter-spacing: 0.4px;
    vertical-align: middle;
    margin-right: 60px;
    user-select: none;

    > span {
      font-size: 24px;
      line-height: 32px;
      
    }
  }

  button {
    background: transparent;
    border: 0;

    svg {
      width: 24px;
      height: 24px;
      color: var(--gray-4);
    }
  }
`;

export const TotalPrice = styled.div`
  width: 100%;
  
  padding-bottom: 11px;
  margin: 0 auto;
  background: var(--gray-1);
  user-select: none;

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 855px;
    margin: 0 auto;

    > p {
      font-family: 'Playfair Display';
      font-size: 24px;
      line-height: 32px;
      margin: 0 16px 0 0;
    }

    div {
      font-family: 'Playfair Display';
      font-size: 34px;
      line-height: 45px;
      letter-spacing: 0.4px;

      > span {
        font-size: 24px;
        line-height: 32px;
        margin-right: 8px;
      }
    }
  }

  
`;

export const OrderOptions = styled.div`
  padding: 32px 22px;
  display: flex;
  justify-content: space-between;

  ${(props) =>
    props.active &&
    css`
      justify-content: space-evenly;

      button:last-child {
        display: none;
      }
  `}

  button {
    width: 160px;
    font-family: 'Mulish';
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    background: transparent;
    color: var(--pink);
    border: 2px solid var(--pink);
    border-radius: 16px;
    padding: 12px 0;
    user-select: none;

    & + button {
      margin-left: 10px;
      background: transparent !important;
      color: var(--pink) !important;
      border: 2px solid var(--pink) !important;
    }

    &:last-child {
      background: var(--pink);
      color: var(--white);
    }
  }
`;

export const Costs = styled.div`
  width: 100%;
  padding: 0;
  margin: 0 auto;
  background: var(--gray-1);
  user-select: none;

   p {
    font-family: 'Playfair Display';
    font-size: 24px;
    line-height: 32px;
    margin: 0;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 855px;
    margin: 0 auto;

    div {
      font-family: 'Playfair Display';
      font-size: 34px;
      line-height: 45px;
      letter-spacing: 0.4px;
      margin-left: 16px;

      > span {
        font-family: 'Playfair Display';
        font-size: 24px;
        line-height: 32px;
        margin-right: 8px;
      }
    }
  }
`;

export const SuccessMessage = styled.div`
  position: absolute;
  display: flex;
  z-index: 6;
  top: 160px;
  left: 0;
  right: 0;
  width: 100%;
  border-radius: 16px;
  background: var(--white);
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: auto;

  > strong {
    font-family: 'Mulish';
    width: fit-content;
    margin: 0 auto;
    display: block;
    font-size: 43px;
    line-height: 46px;
    letter-spacing: 0.4px;
    color: var(--green);
    margin-bottom: 20px;
    border-bottom: 1px solid var(--gray-3);
  }

  > div {

    > span {
      font-family: 'Playfair Display';
      font-size: 28px;
      line-height: 30px;
      letter-spacing: 0.2px;
      margin: 0 0 20px 16px;
      display: block;
    }

    > p {
      font-family: 'Mulish';
      font-size: 18px;
      line-height: 20px;
      margin-right: 8px;
      margin-left: 16px;
      color: var(--gray-6);
    }
  }

  button {
    border: 2px solid var(--pink);
    padding: 6px 27px;
    width: fit-content;
    border-radius: 8px;
    margin: 0 auto;
    background: var(--white);
    transition: .5s;

    &:hover {
      background: var(--pink);
      color: var(--white);
    }
  }
`;

export const ProductDetails = styled.div`
  padding-left: 15px;
  display: flex;

  > p {
    font-family: 'Mulish';
    font-size: 18px;
    line-height: 22px;
    color: var(--gray-6);
    margin-left: 20px;

    &:nth-child(2) {
      

      span {
        font-family: 'Mulish';
        font-size: 16px;
        line-height: 20px;
        color: var(--gray-6);
        margin: 0 15px;
      }
    }
  }
`;

export const MessageBackground  = styled.div`
  position: absolute;
  height: 100vh;
  background: var(--black);
  opacity: 0.7;
  top: 0;
  bottom: 0;
  height: 150%;
  left: 0;
  right: 0;
  z-index: 4;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  border: 2px solid var(--black);
  border-radius: 50%;
  transition: 0.5s;

  &:hover {
    border-color: var(--pink);

    svg {
      color: var(--pink);
    }
  }

  svg {
    width: 30px;
    height: 30px;
    transition: 0.5s;
  }
`;
