import styled,{ css} from 'styled-components';

export const Container = styled.div`
  max-width: 680px;
  width: 100%;
  margin: 0 auto 32px auto;
  /* position: relative; */

  display: flex;
  justify-content: space-evenly;

  font-family: 'Playfair Display';
  font-size: 24px;
  line-height: 32px;

  a {
    text-decoration: none;
    color: var(--black);
  }
`;

export const Page = styled.div`
  ${(props) =>
    props.active &&
    css`
      box-shadow: 0px 3px 0px var(--pink);
  `}
`;
