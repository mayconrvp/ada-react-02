import { useRef } from "react";
import { useTask } from "../../contexts/task.context";
import { Input, HeaderDiv, Button, Title, FormDiv } from "./style"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const Header = () => {
  const MySwal = withReactContent(Swal)
  const inputRef = useRef<HTMLInputElement>(null)
  const {addTask} = useTask()

  const handleCreateTask = () => {
    const inputValue = inputRef.current?.value;
    if(addTask(inputValue!)){
      return true;
    }else{
      MySwal.fire({
        title: "Invalid description",
        text: "Already exists a task with the same name"
      });
    }
  }

  return (
    <HeaderDiv>
      <Title>Todo List</Title>
      <FormDiv>
        <Input ref={inputRef} placeholder="Add a description of your task"></Input>
        <Button onClick={handleCreateTask}>Create</Button>
      </FormDiv>
    </HeaderDiv>
  )
}