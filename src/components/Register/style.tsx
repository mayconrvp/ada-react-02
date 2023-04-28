import styled from 'styled-components'
import { Button, Input } from '../List/style'



export const Block = styled.div`
  background: #fffce9; 
  border: 2px solid  #d3c462;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 28%;
  min-width: 26rem;
  border-radius: 8px;
  height: 25rem;
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
    /* padding-top: 2rem; */
    
    span {
      color: gray;
      font-size: 0.9rem;
    }
  }

`

export const Title = styled.h1`
  font-weight: bold;
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
    color: #424242;
    font-size: 0.9rem;
    margin: 0.4rem 0 .4rem 1.4rem;
    margin-bottom: 0.4rem;
  }
  @media (max-width: 768px){
    display: flex;
    justify-content: center;
  }

`

export const InputRegister = styled(Input)`
  margin-bottom: 1rem;
  margin-top: 0.2rem;
  width: 20rem;
  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    width: 85%;
    margin: 0 auto;
    justify-content: center;
  }
`

export const ButtonLogin = styled(Button)`
  @media (max-width: 768px){
    margin: 1rem auto;
    width: 85%;
  }
`

