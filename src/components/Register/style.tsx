import styled from 'styled-components'
import { Button, Input } from '../List/style'



export const Block = styled.div`
  background: #1d1d1c; 
  border: 2px solid  rgb(166, 247, 80);
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  min-width: 26rem;
  height: 50%;
  border-radius: 8px;
  min-height: 20rem;
  padding-bottom: 4rem;
  padding-top: 2rem;
  @media (max-width: 768px){
    min-width: 20rem;
    width: 80vw;  
  }
  form{
    display: flex;
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    color: #cacaca;
    span {
      font-size: 0.7rem;
    }
  }

`

export const Title = styled.h1`
  font-weight: bold;
  color: rgb(166, 247, 80);
  @media (max-width: 768px){
    font-size: 1.6rem;
  }
`

export const Info = styled.span`
  color: green;
  margin-bottom: 1rem;
  @media (max-width: 768px){
    font-style: italic;
    font-size: 0.9rem;
  }
`

export const Form = styled.form`
  label{
    color: #c7e6c3;
    font-size: 1rem;
  }
  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    label{
      /* padding-left: 1rem; */
      margin: 1rem 1rem 0.4rem;
    }
  }

`

export const InputRegister = styled(Input)`
  margin-bottom: 1rem;
  margin-top: 0.2rem;
  width: 20rem;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    width: 85%;
    margin: 0 auto;
    justify-content: center;
  }
`

export const ButtonLogin = styled(Button)`
  background: rgba(35, 113, 255, 0.13);
  border: 1px solid rgb(166, 247, 80);
  color: rgb(166, 247, 80);
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 768px){
    margin: 1rem auto;
    width: 85%;
  }
`

