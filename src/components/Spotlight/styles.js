import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  position: relative;

  display: flex;
  justify-content: space-between;
  
  @media only screen and (max-width: 700px) {
    flex-direction: column;

  }

  > div {
    width: 48.9%;
    position: relative;

    @media only screen and (max-width: 700px) {
      width: 100%;
      margin-bottom: 20px;
    }

    &:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    > img {
      width: 100%;
    }
  }
`;

export const DoubleBanner = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;

  animation: 'fadeIn' .8s;

  img {
    width: 48%;

    @media only screen and (max-width: 700px) {
      margin-bottom: 20px;
    }
  }
`;