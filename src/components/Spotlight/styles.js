import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 460px;
  margin: 0 auto;
  position: relative;

  display: flex;
  justify-content: space-between;

  > div {
    width: 558px;
    height: 440px;
    position: relative;

    &:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      position: relative;

      animation: spotlightbox2 .8s, 'fadeIn' .8s;

      div:first-child {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;