import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: var(--black);
  background: var(--gray-1);

  h1 {
    color: var(--black);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 40px auto 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border-radius: 16px;
  padding: 20px;
  background: var(--white);

  color: var(--black);
`;