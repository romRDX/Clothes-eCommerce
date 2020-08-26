import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;

  img {
    width: 100%;
    max-width: 110px;
    margin: 0 auto;
  }

  .card {
    border-radius: 13px;
    transition: .5s;
    border: 0;
    border: 1px solid var(--white);
    padding-top: 14px;

    &:hover {
      border-color: var(--gray-4)
    }
  }

  .card-title {
    font-family: 'Playfair Display';
    font-size: 34px;
    line-height: 45px;
    letter-spacing: 0.4px;
    text-align: center;
    margin-bottom: 0;
  }

  .card-text {
    font-family: 'Mulish';
    color: var(--gray-6);
    font-size: 16px;
    line-height: 24px;  
  }
`;

export const Divider = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    font-family: 'Playfair display';
    font-size: 34px;
    line-height: 45px;
    letter-spacing: 0.4px;
  }

  button {
    background: transparent;
    border: 1px solid var(--pink);
    color: var(--black);
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    &:hover {
      background: var(--pink);
      color: var(--white);
      border-color: var(--pink);
    }
  }
`;