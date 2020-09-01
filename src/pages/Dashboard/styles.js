import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--gray-1);

  @media only screen and (max-width: 1260px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 0 20px;
  margin: 0 auto;
  overflow: hidden;
`;