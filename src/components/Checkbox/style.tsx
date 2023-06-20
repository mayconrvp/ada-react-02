import styled from 'styled-components';

interface Props {
  checked: boolean;
}

export const CheckboxContainer = styled.div<Props>`
  width: 36rem;
  min-height: 4rem;
  padding-left: 5px;
  margin: 4px 4px;
  border-radius: 5px;
  
  background-color: ${props => props.checked ? '#6d854f' : '#2e3235'};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  margin: -1px;
  padding: 0;
`;

export const Text = styled.label<Props>`
  color: ${props => props.checked ? '#FFF' : '#a0a0a0'};
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  font-size: 0.9rem;
`;

export const StyledCheckbox = styled.label<Props>`
  min-width: 23px;
  min-height: 23px;
  margin-right: 12px;
  margin-left: 12px;
  background: #F6F6F6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center; 
  
  img {
    display: ${props => props.checked ? 'flex' : 'none'};
  }
  &:hover{
    cursor: pointer;
  }
`;