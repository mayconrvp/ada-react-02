import { useState } from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from "../Checkbox/style";
import { BtnDelete, DivFlex, TaskDiv } from "./style";
import CheckIcon from '../../assets/images/tick.png';
import TrashIcon from '../../assets/images/trash.svg';
import { useTask } from "../../contexts/task.context";
import Swal from "sweetalert2";


export interface ITask {
  id: string;
  description: string;
  isConcluded: boolean;
}

export const Task = ({description, isConcluded, id} : ITask) => {
  const { alterStatus, deleteTask } = useTask();
  function handleCheckboxChange(){
    alterStatus(id);
  }

  const handleDeleteTask = (id: string) =>{
    Swal.fire({
      title: 'Do you want to delete the task?',
      text: "Deseja excluir a tarefa?",
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if(deleteTask(id)){
          Swal.fire('Task deleted successfully.', '', 'success')
        }else{
          console.log("ERRO AO DELETAR")
        }
      }
    })
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
        <BtnDelete onClick={()=>handleDeleteTask(id)} disabled={isConcluded}>
          <img src={TrashIcon} alt="delete" />
        </BtnDelete>
      </DivFlex>
      
    </TaskDiv>
  )
}