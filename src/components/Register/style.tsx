import styled from 'styled-components'
import { Input } from '../List/style'



export const Block = styled.div`
  background: #fffce9; 
  border: 2px solid  #d3c462;
  margin: 14rem auto;
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
`

export const InputRegister = styled(Input)`
  margin-bottom: 1rem;
  margin-top: 0.2rem;
  width: 20rem;
`