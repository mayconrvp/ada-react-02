import styled from 'styled-components';

export const HeadDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #d5a30b;
  @media (max-width: 768px){
    justify-content: space-between;
    padding: 0 0.4rem;

  }
`

export const Title = styled.h1`
  display: flex;
  color: #fff9a6;
  @media (max-width: 768px){
    font-size: 1.1rem;
  }
`;

export const Logout = styled.span`
  color: #fff9a6;

  &:hover{
    cursor: pointer;
    color: #ffd3aa;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d5a30b;
  padding: 0 0 2rem 0;

  div .logout {
    background-color: red;
    display: flex;
    width: 100%;
  }
`;
