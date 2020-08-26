import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--black);
  background: var(--gray-1);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  background: var(--white);
  border-radius: 16px;
  
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

  p {
    font-family: 'Mulish';
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 14px;
    display: flex;
    height: fit-content;

    span {
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
  

  p {
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
  top: 21px;
  width: fit-content !important;
  height: fit-content !important;
  padding: 5px;
  cursor: initial !important;
  user-select: none;
  font-family: 'Mulish';
  font-weight: bold;
  border: 2px solid red !important;
  background: #ff9d9d;
`;

export const ProdPrice = styled.div`
  display: flex;
  align-items: center;

  p {
    font-family: 'Playfair Display';
    font-size: 34px;
    line-height: 45px;
    letter-spacing: 0.4px;
    vertical-align: middle;
    margin-right: 60px;
    user-select: none;

    span {
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

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 728px;
    margin: 0 auto;

    p {
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

      span {
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
    max-width: 728px;
    margin: 0 auto;

    div {
      font-family: 'Playfair Display';
      font-size: 34px;
      line-height: 45px;
      letter-spacing: 0.4px;
      margin-left: 16px;

      span {
        font-family: 'Playfair Display';
        font-size: 24px;
        line-height: 32px;
        margin-right: 8px;
      }
    }
  }
`;