import styled from 'styled-components'

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
  height: 40vh;
  width: 100%;
  /* margin-top:4rem; */
  background: #fff7d6;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;


  img{
    width: 90px;
  }

  @media (max-width: 768px){
    width: 80vw;
    height: 40vh;
    margin-top: 2rem;
    font-size: 82%;
  }
`;

export const Input = styled.input`
  width: 30rem;
  height: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(27, 31, 35, 0.15);
  font-size: 0.8rem;
  padding-left: 0.5rem;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";

  @media (max-width: 768px){
    width: 70vw;    
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
  @media (max-width: 768px){
    width: 75vw;    
  }
`;

export const Button = styled.button`
  appearance: none;
  background-color: ${(props) => props.color ?? "#a5c518"};
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 6px 16px;  
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  

  &:hover{
    background-color: #e6dd64;
    text-decoration: none;
    transition-duration: 0.1s;
    cursor: pointer;
  }

  &:disabled {
    background-color: #c5eece;
    border-color: rgba(27, 31, 35, 0.15);
    color: #959DA5;
    cursor: not-allowed;
  }
  @media (max-width: 768px){
    display: flex;
    width: 4rem;  
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonClearAll = styled(Button)`
  background-color : #ff00008f ;
  color:white;
  margin-bottom: 1rem;
  &:hover {
    background-color : #d84343 ;
  }
`


export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  margin-top: -1.6rem;
  margin-bottom: 2rem;
  @media (max-width: 768px){
    /* flex-direction: column; */
  }
`;


