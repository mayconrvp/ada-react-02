import React from "react"
import { Task } from "../Task";
import { EmptyTask, ListDiv } from "./style";
import TaskIcon from '../../assets/images/task.png';

interface ListProps{
  listTasks: Task[];
  setListTasks: (val: Task[]) => void;
}

export interface Task {
  id: string;
  description: string;
  isConcluded: boolean;
}

export const List = ({listTasks, setListTasks}: ListProps) => {
  const alterStatus = (id: string) => {
    let index = listTasks.findIndex(task => task.id === id);
    if(index >= 0){
      const copyList = [...listTasks];
      copyList[index].isConcluded = !copyList[index].isConcluded;
      setListTasks(copyList);
    }
  } 

  function deleteTask(id: string){
    const newTasks = listTasks.filter(task => task.id !== id);
    setListTasks(newTasks);
  }
  return (
    <ListDiv>
      {listTasks.length > 0 ? 
        listTasks.map((item, index) => {
          return (
            <Task 
              id={item.id} 
              isConcluded={item.isConcluded} 
              key={item.id} 
              description={item.description} 
              alterStatus={alterStatus}
              deleteTask={deleteTask}
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