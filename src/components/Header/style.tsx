import styled from 'styled-components';


export const Title = styled.h1`
  display: flex;
  color: #fff9a6;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d5a30b;
  padding: 0 0 2rem 0;
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

export const Input = styled.input`
  width: 30rem;
  height: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(27, 31, 35, 0.15);
  font-size: 0.8rem;
  padding-left: 0.5rem;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
`;

export const Button = styled.button`
  appearance: none;
  background-color: #eefda9;
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

`;