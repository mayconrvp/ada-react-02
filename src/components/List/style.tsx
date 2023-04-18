import styled from 'styled-components'
import { Input } from "../Header/style";

export const ListDiv = styled.div`
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  border-radius: 8px;
  height: 70%;
  margin-bottom: -4rem;
  padding-bottom: 100px;
`;


export const EmptyTask = styled.div`
  border: 1px solid #fff7d6;
  border-radius: 8px;
  height: 30rem;
  width: 100%;
  margin-top:4rem;
  background: #fff7d6;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;


  img{
    width: 90px;
  }
`;

export const SearchInput = styled(Input)`
  width: 40%;
  align-items: flex-start;
  color: gray;
  margin-top: -1.4rem;
  outline: none;
  margin-bottom: 1rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid #c09d11;
  text-align: center;
  font-size: 1rem;

  &:focus {
    border-bottom: 2px solid #58490c;
  }
`;
