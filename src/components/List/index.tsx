import React, { ChangeEvent, useState } from "react"
import { Task } from "../Task";
import { EmptyTask, ListDiv } from "./style";
import TaskIcon from '../../assets/images/task.png';
import Swal from "sweetalert2";

interface ListProps{
  listTasks: Task[];
  setListTasks: (val: Task[]) => void;
  saveTasks: (val: Task[]) => void;
}

export interface Task {
  id: string;
  description: string;
  isConcluded: boolean;
}

export const List = ({listTasks, setListTasks, saveTasks}: ListProps) => {
  const [searchText, setSearchText] = useState('');

  const alterStatus = (id: string) => {
    let index = listTasks.findIndex(task => task.id === id);
    if(index >= 0){
      const copyList = [...listTasks];
      copyList[index].isConcluded = !copyList[index].isConcluded;
      saveTasks(copyList);
      setListTasks(copyList);
    }
  } 

  const deleteTask = (id: string) =>{
    Swal.fire({
      title: 'Do you want to delete the task?',
      text: "Deseja excluir a tarefa?",
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const newTasks = listTasks.filter(task => task.id !== id);
        setListTasks(newTasks);
        saveTasks(newTasks);
        Swal.fire('Task deleted successfully.', '', 'success')
      }
    })
    

  }
  
  const handleSearchItem = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }


  return (
    <ListDiv>
      {listTasks.length > 0 ? 
        listTasks.filter((eachTask) => eachTask.description.includes(searchText)).map((item, index) => {
          return (
            <>
            <Task 
              id={item.id} 
              isConcluded={item.isConcluded} 
              key={item.id} 
              description={item.description} 
              alterStatus={alterStatus}
              deleteTask={deleteTask}
            />
            </>
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