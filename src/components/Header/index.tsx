import { KeyboardEvent, useCallback, useRef } from "react";
import { useTask } from "../../contexts/task.context";
import { Input, HeaderDiv, Button, Title, FormDiv } from "./style"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const Header = () => {
  const MySwal = withReactContent(Swal)
  const inputRef = useRef<HTMLInputElement>(null)
  const {addTask} = useTask()

  const handleCreateTask = () => {
    const inputValue = inputRef.current?.value.trim();
    if(addTask(inputValue!)){
      if(inputRef.current) inputRef.current.value = "";
      return true;
    }else{
      MySwal.fire({
        title: "Invalid description",
        text: "Already exists a task with the same name"
      });
    }
  }

  const handleNewTaskKeyPress = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      console.log('handleNewTaskKeyPress')
      if (event.key === "Enter") {
        handleCreateTask()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputRef.current?.value]
  );

  return (
    <HeaderDiv>
      <Title>Todo List</Title>
      <FormDiv>
        <Input ref={inputRef} onKeyPress={handleNewTaskKeyPress} placeholder="Add a description of your task"></Input>
        <Button onClick={handleCreateTask}>Create</Button>
      </FormDiv>
    </HeaderDiv>
  )
}