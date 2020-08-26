import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  margin-bottom: 60px;
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

  span {
    font-family: 'Playfair Display';
    font-size: 34px;
    line-height: 45px;
    letter-spacing: 0.4px;
    padding-left: 38px;
  }

  .carousel {
    margin-top: 33px;
  }

  .carousel-control-next {
    right: -90px;
    width: 10%;

    svg {
      color: red;
    }

    &:after {
      content: '';
      border: 0;
      border-top: 3px solid var(--gray-6);
      border-right: 3px solid var(--gray-6);
      width: 15px;
      height: 15px;
      border-radius: 1px 5px;
      transform: rotate(45deg);
    }
  }
  
  .carousel-control-prev {
    left: -90px;
    width: 10%;

    &:before {
      content: '';
      border: 0;
      border-top: 3px solid var(--gray-6);
      border-right: 3px solid var(--gray-6);
      width: 15px;
      height: 15px;
      border-radius: 1px 5px;
      transform: rotate(-135deg);
    }
  }

  .carousel-indicators {
    /* top: -50px;
    right: -167px;
    left: initial; */
    bottom: -50px;

    li {
      background: var(--black);
      border-radius: 50%;
      width: 15px;
      height: 15px;
      border: 0;
    }
  }

  .card {
    width: 100%;
    max-width: 250px;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  justify-content: space-evenly;
`;