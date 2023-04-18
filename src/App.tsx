import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { List } from './components/List';
import { v4 as uuidv4, validate } from 'uuid';

import { Task } from './components/List';
import { Footer } from './components/Footer';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {
  const MySwal = withReactContent(Swal)
  const [listTasks, setListTasks] = useState<Task[]>([]);

  const handleAddNewTask = (text: string) => {
    if(text!==""){
      if(isAValidText(text)){
        let newTask = {
          id: uuidv4(),
          description: text,
          isConcluded: false
        }
        const updatedTasks = [...listTasks, newTask];
        setListTasks(updatedTasks);
        saveTasks(updatedTasks);
        return true;
      }else{
        MySwal.fire({
          title: "Invalid description",
          text: "Already exists a task with the same name"
        });
      }
    }else{
      MySwal.fire({
        title: "Empty description",
        text: "Enter the description of your task"
      });
    }
    return false;
  }

  const isAValidText = (t: string) => {
    const taskEqual = listTasks.find(task => task.description.toLowerCase() == t.toLowerCase())
    console.log(taskEqual)
    if(!taskEqual) return true;
    return false;
  }

  useEffect(() => {
    const fetchTasks = () => {
      const taskString = localStorage.getItem('tasks');
      if(taskString) {
        const tasks = JSON.parse(taskString);
        setListTasks(tasks);
      }
    }
    
    fetchTasks();
  }, [])
  
  const saveTasks = (tasksArr: Task[]) => {
    const tasksString = JSON.stringify(tasksArr);
    localStorage.setItem('tasks', tasksString);
  }

  return (
    <>
      <Header handleAddNewTask={handleAddNewTask}/>
      <List listTasks={listTasks} setListTasks={setListTasks} saveTasks={saveTasks}/>
      <Footer />
    </>
  );
}

export default App;
