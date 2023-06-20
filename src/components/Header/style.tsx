import styled from 'styled-components';

export const HeadDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  background: rgb(29, 35, 43);
  color: rgb(166, 247, 80);
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px){
    height: 4rem;
    font-size: 1rem;

  }
`

export const Title = styled.h1`
  display: flex;
  color: rgb(166, 247, 80);
  @media (max-width: 768px){
    font-size: 0.9rem;
  }
`;

export const Logout = styled.span`
  color: #da6464;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: color 0.2s;
  img{
    height: 1rem;
    color: red;
  }

  &:hover{
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
