import styled from 'styled-components';

export const TaskDiv = styled.div`
  
  display: flex;
  flex: 1;
`;
export const DivFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const BtnDelete = styled.button`

  background: #ffcebb;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 800;
  min-height: 2rem;
  height: 89%;
  padding: 12px 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: -2px;
  }

  &:hover {
    background-color: #ffa7a6;
    background-position: 0 0;
    color: #FF4742;
  }

  &:disabled {
    /* background-color: #d4d4d4; */
    border-color: rgba(27, 31, 35, 0.15);
    color: #959DA5;
    filter: contrast(40%);
    cursor: not-allowed;
  }
`;

