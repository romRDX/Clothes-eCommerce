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
    position: absolute;

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

    @media only screen and (max-width: 1160px) {
      right: -15px;
      width: auto;
      height: fit-content;
      padding: 30px 20px;
      margin: auto;
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

    @media only screen and (max-width: 1160px) {
      left: -15px;
      width: auto;
      height: fit-content;
      padding: 30px 20px;
      margin: auto;
    }
  }

  .carousel-control-prev-icon, .carousel-control-next-icon  {
      display: none;
  }

  .carousel-indicators {
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
    margin: 13px;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  /* @media only screen and (max-width: 830px) { */
`;