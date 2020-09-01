import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  background: var(--white);
  padding-top: 24px;

  svg {
    color: #1B2437;
    width: 18px;
    height: 18px;
  }
`;

export const Content = styled.div`
  margin-top: 46px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 10vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  border-top: 1px solid var(--gray-2);

  > div {
    margin: 8px 10px;
  }
`;

export const NavBar = styled.div`
width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const Trademark = styled.div`

  p {
    font-family: 'Mulish';
    font-size: 16px;
    line-height: 24px;
    color: var(--gray-6);
    max-width: 240px;
    margin-top: 20px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  span {
    font-family: Playfair Display;
    font-size: 24px;
    line-height: 32px;
    color: var(--black);
  }

  a {
    font-family: 'Mulish';
    font-size: 16px;
    line-height: 20px;
    color: var(--gray-6);
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 10vw;
  background: var(--gray-2);

  span {
    font-family: 'Mulish';
    font-size: 16px;
    line-height: 20px;
    color: var(--gray-6);
    margin-right: 15px;
  }
`;