import styled from 'styled-components';

export const Container = styled.div`
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