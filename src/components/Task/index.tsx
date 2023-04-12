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

  const [checked, setChecked] = useState(false);

  function handleCheckboxChange(){
    setChecked(!checked);
    alterStatus(id);
  }

  function handleDeleteTask(){
    deleteTask(id);
  }

  console.log(id, isConcluded, description);
  return (
    <TaskDiv>
      {/* <Checkbox label={description}/> */}
      <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
        <DivFlex>
          <HiddenCheckbox onChange={handleCheckboxChange} checked={checked}/>
          <StyledCheckbox checked={checked}>
            <img
              alt="tick icon"
              style={{width: '20px'}}
              src={CheckIcon}
          />
          </StyledCheckbox>
          <Text checked={checked}>{description}</Text>
        </DivFlex>
      </CheckboxContainer>
      <DivFlex>
        <BtnDelete onClick={handleDeleteTask} disabled={checked}>
          <img src={TrashIcon} alt="delete" />
        </BtnDelete>
      </DivFlex>
      
    </TaskDiv>
  )
}