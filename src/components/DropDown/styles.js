import styled, { css } from 'styled-components';

export const Container = styled.div`
  /* position: relative; */

  color: var(--black);

  > span {
    font-family: 'Playfair Display';
    font-size: 24px;
    line-height: 32px;
    position: relative;
    cursor: pointer;

    svg {
      margin-left: 2px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 175px;
  left: 0;
  justify-content: space-between;
  padding: 56px 20%;
  background: var(--gray-2);

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
    }
    `}

  span {
    font-family: 'Playfair Display';
    font-size: 24px;
    line-height: 32px;
    position: relative;
    display: block;
    margin-bottom: 24px;
    user-select: none;
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