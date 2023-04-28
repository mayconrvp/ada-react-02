import styled from "styled-components";

export const Totalizers = styled.span`
  display: flex;
  justify-content: space-between;
  color: gray;
  font-size: 0.8rem;
  margin-top: -1.1rem;
  margin-bottom: -1rem;

  @media (max-width: 768px){
    width: 22rem;  
    justify-content: center;
  }
`;