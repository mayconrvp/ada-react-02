import { useRef } from "react";
import { Input, HeaderDiv, Button, Title, FormDiv } from "./style"

interface HeaderProps {
  handleAddNewTask: (text: string) => boolean;
}


export const Header = ({handleAddNewTask}: HeaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCreateTask = () => {
    const inputValue = inputRef.current?.value;
    handleAddNewTask(inputValue!);
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