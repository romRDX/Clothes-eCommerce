import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 64px;
  left: 0;
  justify-content: space-between;
  padding: 56px 20%;
  background: var(--gray-2);
  z-index: 2;

  ${(props) =>
    props.isOpen &&
    css`
      &:after {
      content: '';
      width: 20px;
      height: 20px;

      top: -10px;
      right: 96px;
      bottom: 0;
      left: 0px;
      margin: 0 auto;

      position: absolute;
      transform: rotate(45deg);
      background: var(--gray-2);
    }`
  }

  @media only screen and (max-width: 830px) {
    
    flex-direction: column;
    top: -84px;
    left: 90.5%;
    padding: 20px 0 20px 50px;
    width: 109%;
    max-width: 109%;

    &:after {
      width: 0;
      height: 0;
    }
  }

  span {
    font-family: 'Playfair Display';
    font-size: 24px;
    line-height: 32px;
    position: relative;
    display: block;
    margin-bottom: 24px;
    user-select: none;
    color: var(--black);
  }

  div {

    p {
      font-family: 'Mulish';
      font-size: 16px;
      line-height: 20px;
      color: var(--gray-6);
      cursor: pointer;
      transition: 1s;

      &:hover {
        color: var(--black);
        text-decoration: underline;
      }
    }
  }
`;

export const OptionTitle = styled.div`
  font-family: 'Playfair Display';
  font-size: 24px;
  line-height: 32px;
  position: relative;
  cursor: pointer;
  color: var(--black);
  margin-right: 5vw;

  svg {
    margin-left: 2px;
  }
`;

export const MobileCloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  display: none;

  svg {
    width: 28px;
    height: 28px;
    color: var(--black);
  }

  @media only screen and (max-width: 830px) {
    display: block;
  }
`;