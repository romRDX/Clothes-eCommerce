import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--black);
  margin: 10px 0;
  border: 2px solid var(--gray-2);
  border-radius: 8px;
  padding: 15px;

  > p {
    font-family: 'Playfair Display';
    width: fit-content;
    border-bottom: 2px solid var(--gray-5);

    span {
      margin-left: 5px;
      font-family: 'Mulish';
    }
  }
`;


export const OrderProducts = styled.div`
  /* > div {
    margin: 10px 0;
  } */
`;

export const BillDetails = styled.div`
  display: flex;
  flex-direction: column;
`;