import styled from 'styled-components';

export const Container = styled.div`

  font-family: 'Mulish';
  
  display: flex;
  justify-content: flex-start;
  margin: 15px 0 15px 20px;

  border-left: 2px solid var(--gray-2);
  padding-left: 15px;

  color: var(--black);

  img {
    height: 60px;
    margin: auto 0;
  }
`;


export const Details = styled.div`
  margin-left: 15px;

  span {
    font-family: 'Playfair Display';
    font-size: 22px;
    line-height: 24px;
  }

  div {
    display: flex;
    margin-top: 10px;

    p {
      margin-right: 15px;
    }
  }
`;

export const Values = styled.div`
  margin-left: 80px;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-self: end;
  font-weight: bold;

  p {
    margin-bottom: 0;
  }
`;