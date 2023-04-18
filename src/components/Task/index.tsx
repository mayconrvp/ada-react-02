import { useState } from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from "../Checkbox/style";
import { BtnDelete, DivFlex, TaskDiv } from "./style";
import CheckIcon from '../../assets/images/tick.png';
import TrashIcon from '../../assets/images/trash.svg';


interface TaskProps {
  id: string;
  description: string;
  isConcluded: boolean;
  alterStatus: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const Task = ({description, isConcluded, id, alterStatus, deleteTask} : TaskProps) => {

  function handleCheckboxChange(){
    alterStatus(id);
  }

  function handleDeleteTask(){
    deleteTask(id);
  }

  return (
    <TaskDiv>
      <CheckboxContainer checked={isConcluded} onClick={handleCheckboxChange}>
        <DivFlex>
          <HiddenCheckbox onChange={handleCheckboxChange} checked={isConcluded}/>
          <StyledCheckbox checked={isConcluded}>
            <img
              alt="tick icon"
              style={{width: '20px'}}
              src={CheckIcon}
          />
          </StyledCheckbox>
          <Text checked={isConcluded}>{description}</Text>
        </DivFlex>
      </CheckboxContainer>
      <DivFlex>
        <BtnDelete onClick={handleDeleteTask} disabled={isConcluded}>
          <img src={TrashIcon} alt="delete" />
        </BtnDelete>
      </DivFlex>
      
    </TaskDiv>
  )
}