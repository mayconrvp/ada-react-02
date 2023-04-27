import React, { ChangeEvent, KeyboardEvent, useCallback, useRef } from "react"
import { ITask, Task } from "../Task";
import { Button, ButtonClearAll, EmptyTask, FormDiv, Input, ListDiv, SearchInput } from "./style";
import TaskIcon from '../../assets/images/task.png';
import { StatusTask } from "../StatusTask";
import { useTask } from "../../contexts/task.context";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'

export const List = () => {


  const MySwal = withReactContent(Swal)
  const inputRef = useRef<HTMLInputElement>(null)
  const { addTask } = useTask();

  const { listTasks, tasksFiltered, setSearchText, deleteAllTasks} = useTask();

  const handleSearchItem = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }

  const handleRemoveAll = () => {
    Swal.fire({
      title: 'Do you want to delete all tasks?',
      text: "Confirma a exclusão de todas as tarefas?",
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteAllTasks()
        Swal.fire('All Tasks deleted.', '', 'success')
      }
    })
  }

  
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
      if (event.key === "Enter") {
        handleCreateTask()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputRef.current?.value]
  );


  return (
    <ListDiv>
      <FormDiv>
        <Input ref={inputRef} onKeyPress={handleNewTaskKeyPress} placeholder="Add a description of your task"></Input>
        <Button onClick={handleCreateTask}>Create</Button>
      </FormDiv>
      <SearchInput onChange={handleSearchItem} placeholder="Search task" />
      <StatusTask listTasks={listTasks} />
      {listTasks.length > 0 ? <ButtonClearAll onClick={handleRemoveAll}>Clear All</ButtonClearAll> : <></>}
      {
      listTasks.length > 0 ? 
      tasksFiltered.map((item, index) => {
          return (
            <Task 
              id={item.id} 
              isConcluded={item.isConcluded} 
              key={item.id} 
              description={item.description} 
            />
          )
        })
      : 
        <EmptyTask>
          <img src={TaskIcon} alt="" />
          <h2>Don't exist tasks to show</h2>
        </EmptyTask>}
    </ListDiv>
  )
}