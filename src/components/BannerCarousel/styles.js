import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;

  position: relative;

  animation:  'fadeIn' 1.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;