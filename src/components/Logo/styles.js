import styled from 'styled-components';

export const Container = styled.div`
  width: 22px;
  height: 22px;
  border: 2px solid var(--black);
  border-radius: 50%;
  border-top-right-radius: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: wrap;

  div {
    width: 50%;
    height: 50%;
    border-top: 2px solid var(--black);
    border-left: 2px solid var(--black);
  }
`;