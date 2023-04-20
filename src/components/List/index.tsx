import React, { ChangeEvent, useState } from "react"
import { ITask, Task } from "../Task";
import { EmptyTask, ListDiv, SearchInput } from "./style";
import TaskIcon from '../../assets/images/task.png';
import Swal from "sweetalert2";
import { StatusTask } from "../StatusTask";
import { useTask } from "../../contexts/task.context";


export const List = () => {
  
  const { listTasks, tasksFiltered, setSearchText } = useTask();

  const handleSearchItem = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }

  return (
    <ListDiv>
      <SearchInput onChange={handleSearchItem} placeholder="Search task" />
      <StatusTask listTasks={listTasks} />
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