import React, { useState } from 'react';
import { Header } from './components/Header';
import { List } from './components/List';
import { v4 as uuidv4 } from 'uuid';

import { Task } from './components/List';
import { Footer } from './components/Footer';

function App() {

  const [listTasks, setListTasks] = useState<Task[]>([]);

  const handleAddNewTask = (text: string) => {
    if(text!==""){
      let newTask = {
        id: uuidv4(),
        description: text,
        isConcluded: false
      }
      setListTasks([...listTasks, newTask]);
      return true;
    }else{
      alert("Preencha a descrição de sua tarefa");
      return false;
    }
  }

  return (
    <>
      <Header handleAddNewTask={handleAddNewTask}/>
      <List listTasks={listTasks} setListTasks={setListTasks}/>
      <Footer />
    </>
  );
}

export default App;
