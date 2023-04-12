import { ChangeEvent, useState } from "react";
import { Input, HeaderDiv, Button, Title, FormDiv } from "./style"

interface HeaderProps {
  handleAddNewTask: (text: string) => boolean;
}


export const Header = ({handleAddNewTask}: HeaderProps) => {
  const [textOfInput, setTextOfInput] = useState('');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    setTextOfInput(val);
  }

  return (
    <HeaderDiv>
      <Title>Todo List</Title>
      <FormDiv>
        <Input value={textOfInput} onChange={handleChangeInput} placeholder="Add a description of your task"></Input>
        <Button onClick={() => {handleAddNewTask(textOfInput) ? setTextOfInput('') : console.log('Invalid Description')}}>Create</Button>
      </FormDiv>
    </HeaderDiv>
  )
  
}