import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  margin-bottom: 40px;
  position: relative;
  animation:  'fadeIn' 1.5s;
  color: var(--black);

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  > span {
    font-family: 'Playfair Display';
    font-size: 34px;
    line-height: 45px;
    letter-spacing: 0.4px;
    padding-left: 38px;
  }

  .carousel {
    margin-top: 33px;
  }

  .carousel-inner {
    padding-bottom: 10px;
  }

  .carousel-control-next, .carousel-control-prev {
    display: none;
  }

  .carousel-indicators {
    top: -50px;
    right: -15%;
    left: initial;

    li {
      background: var(--black);
      border-radius: 50%;
      width: 15px;
      height: 15px;
      border: 0;
    }
  }
`;

export const ItemContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;