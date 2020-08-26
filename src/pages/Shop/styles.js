import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--black);
  background: var(--gray-1);

  h1 {
    color: var(--black);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 40px auto 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  > div {
    width: 288px;
    margin: 15px;
    margin: 15px;
  }
`;