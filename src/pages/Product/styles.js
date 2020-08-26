import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: #F6F6F6;

  animation: 'fadeIn' 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  h1 {
    color: var(--black);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 32px 0 40px 0;
  display: flex;
  background: var(--white);
  border-radius: 16px;

  > div {
    width: 50%;
  }
`;

export const ProductImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainImage = styled.div`

  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  animation: 'fadeIn' 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  > div {
    cursor: pointer;
  }

  img {
    width: 100%;
    max-width: 280px;
    user-select: none;
  }

  svg {
    height: 25px;
    width: 25px;
    color: var(--gray-4);
  }
`;

export const ImageOptions = styled.div`

  display: flex;
  justify-content: center;
  width: 95%;

`;

export const MiniImage = styled.div`
  margin: 30px 10px 0 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: .5s;

  ${(props) =>
    props.isSelected &&
    css`
      border-color: var(--gray-4);
      margin-top: 20px;
      margin-bottom: 10px;
  `}

  img {
    max-width: 72px;
    user-select: none;
  }
`;

export const ProductDetails = styled.div`
  color: var(--black);
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;

export const Favorite = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  user-select: none;

  div {
    &:first-child {
      height: fit-content;
      border-radius: 8px;
      padding: 6px 22px;
      background: var(--gray-3);
      font-family: 'Mulish';
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
    }

    &:last-child {
      width: 45px;
      height: 45px;
      background: #FDF6F8;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      svg {
        width: 24px;
        height: 24px;
        color: var(--pink);
      }
    }
  }
`;

export const ProductName = styled.div`
  span {
    font-family: 'Playfair Display';
    font-size: 48px;
    line-height: 64px;
    letter-spacing: 0.4px;
  }

  p {
    font-family: 'Mulish';
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.2px;
    margin: 10px 0 20px;
    color: var(--gray-6);
  }
`;

export const ProductReviews = styled.div`

  margin-bottom: 30px;

  > svg {
    width: 24px;
    height: 24px;
    color: var(--pink);
    margin-right: 10px;
  }
`;

export const ProductDescription = styled.div`
  width: 100%;
  color: var(--black);

  div {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 32px;

    &:last-child {
      color: var(--gray-6);
      font-family: 'Mulish';
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const DescriptionOption = styled.p`
  text-align: center;
  width: 100%;
  border-bottom: 1px solid var(--gray-2);
  padding-bottom: 10px;
  cursor: pointer;

  font-family: 'Mulish';
  font-size: 16px;
  line-height: 20px;

  ${(props) =>
    props.isSelected &&
    css`
      color: var(--pink);
      border-color: var(--pink);
  `}
`;

export const ProductOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductSizes = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
  user-select: none;

  p {
    margin-bottom: 8px;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const SizeOption = styled.div`
  width: 55px;
  padding: 10px;
  border: 2px solid var(--gray-3);
  border-radius: 8px;
  cursor: pointer;

  font-family: 'Mulish';
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  transition: .5s;

  ${(props) =>
    props.isSelected &&
    css`
      color: var(--white);
      background: var(--pink);
      border-color: var(--pink);
  `}
`;

export const ProductColor = styled.div`
  width: 46%;
`;

export const ProductSellOptions = styled.div`
  margin-top: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: 'Playfair Display';
    font-size: 34px;
    line-height: 45px;
    letter-spacing: 0.4px;
    margin-bottom: 0;
  }

  button {
    padding: 12px 26px;
    font-family: 'Mulish';
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: var(--pink);
    background: transparent;
    border: 2px solid var(--pink);
    border-radius: 16px;
    transition: 0.5s;

    &:hover {
      color: var(--white);
      background: var(--pink);
    }
  }
`;

export const BackToShop = styled.div`
  width: 100%;
  font-size: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  
  a {
    padding: 12px 26px;
    font-family: 'Mulish';
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: var(--pink);
    background: transparent;
    border: 2px solid var(--pink);
    border-radius: 16px;
    transition: 0.5s;
    text-decoration: none;

    &:hover {
      color: var(--white);
      background: var(--pink);
    }
  }
`;