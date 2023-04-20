import { useRef } from "react";
import { Input, HeaderDiv, Button, Title, FormDiv } from "./style"

interface HeaderProps {
  handleAddNewTask: (text: string) => boolean;
}


export const Header = ({handleAddNewTask}: HeaderProps) => {
  let inputRef = useRef<HTMLInputElement>(null)

  const handleCreateTask = () => {
    let inputValue = inputRef.current?.value;
    if(handleAddNewTask(inputValue!)) {
      if(inputRef.current) inputRef.current.value = "";
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