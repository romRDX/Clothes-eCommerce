import styled from 'styled-components';

export const Container = styled.div`

  position: relative;
  cursor: pointer;
  
  img {
    width: 250px;
    
    margin: 20px auto 0;
  }

  .card {
    border-radius: 13px;
    transition: .5s;
    overflow: hidden;
    border: 0;
    transition: 0.5s;
    margin: 12px;

    &:hover {
      box-shadow: 2px 2px 8px var(--gray-6);
    }
  }

  .card-title {
    font-family: 'Playfair Display';
    font-size: 34px;
    line-height: 45px;
    letter-spacing: 0.4px;
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
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    span {
      font-family: 'Playfair display';
      font-size: 34px;
      line-height: 45px;
      letter-spacing: 0.4px;
      height: fit-content;
      display: block;

      &:first-child {
        font-size: 24px;
        line-height: 32px;
        margin-right: 8px;
        margin-bottom: 2px;
      }
    }
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
    outline: none;

    &:hover {
      background: var(--pink);
      color: var(--white);
      border-color: var(--pink);
    }
  }
`;