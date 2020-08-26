import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: var(--white);
  position: relative;
  z-index: 10;

  svg {
    color: #1B2437;
    width: 18px;
    height: 18px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
`;

export const HeaderTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 40px 0 40px;
  margin-bottom: 60px;

  div:last-child {

    input {
      display: none;
    }

    svg {
      width: 24px;
      height: 24px;

      &:last-child {
        margin-left: 30px;
        cursor: pointer;
      }
    }
  }
`;

export const NavBar = styled.div`
width: 80%;
  display: flex;
  justify-content: space-between;
`;