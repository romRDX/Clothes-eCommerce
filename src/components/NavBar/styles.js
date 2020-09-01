import styled,{ css} from 'styled-components';

export const Container = styled.div`
  /* max-width: 680px; */
  width: 100%;
  margin: 0 auto 32px auto;
  position: relative;

  @media only screen and (max-width: 830px) {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  font-family: 'Playfair Display';
  font-size: 24px;
  line-height: 32px;

  > div + div {
    /* margin-left: 5vw; */
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  .socialMedia {
    width: 150px;
    margin: 15px 0;
    display: none;
    
    svg {
      /* ma */
    }
  }

  @media only screen and (max-width: 830px) {
    width: 100%;
    position: absolute;
    top: -4px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--gray-2);
    padding-left: 30px;

    > div + div {
      margin-left: 0;
    }

    .socialMedia {
      display: flex;
    }
  }
`;

export const Page = styled.div`

  margin-right: 5vw;

  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    props.active &&
    css`
      a {
        box-shadow: 0px 3px 0px var(--pink);
      }
      
  `}

  @media only screen and (max-width: 830px) {
    margin: 10px 0; 
  }
`;

export const BurgerMenu = styled.div`

  display: none;
  width: fit-content;
  height: fit-content;

  @media only screen and (max-width: 830px) {
    display: flex;
    position: absolute;
    top: -53px;
    left: 90px;
    
    svg {
      width: 25px;
      height: 25px;
      cursor: pointer;
      color: var(--black);
    }
  }
`;