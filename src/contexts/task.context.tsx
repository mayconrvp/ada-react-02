import { createContext, useState, useEffect, useContext } from "react";
import { ITask } from "../components/Task";
import { v4 as uuidv4, validate } from 'uuid';


interface ITaskContext {
  listTasks: ITask[],
  tasksFiltered: ITask[],
  setSearchText: React.Dispatch<React.SetStateAction<string>>,
  searchText: string
  addTask: (text: string) => boolean,
  alterStatus: (id: string) => void,
  deleteTask: (id: string) => boolean,
  deleteAllTasks: () => void
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

interface IProps {
  children: React.ReactNode
}

const TaskProvider = (({children }: IProps) => {
  const [listTasks, setListTasks] = useState<ITask[]>([]);
  const [tasksFiltered, setTaskFiltered] = useState<ITask[]>([])
  const [searchText, setSearchText] = useState('');


  
  useEffect(() => {
    const fetchTasks = () => {
      const taskString = localStorage.getItem('tasks');
      if(taskString) {
        const tasks = JSON.parse(taskString);
        setListTasks(tasks);
      }
    }
    
    fetchTasks();
  }, []);


  useEffect(() => {
    const listTasksFiltered = listTasks.filter((task) => task.description.toLowerCase().includes(searchText.toLowerCase()))
    setTaskFiltered(listTasksFiltered);
  }, [searchText, listTasks]);



  const addTask = (text: string) => {
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
      }
    }
    return false;
  };

  const deleteTask = (id: string) =>{
    const newTasks = listTasks.filter(task => task.id !== id);
    if(newTasks){
      setListTasks(newTasks)
      saveTasks(newTasks);
      return true;
    }
    return false;
  }

  const deleteAllTasks = () => {
    setListTasks([])
    saveTasks([]);
  }
  
  const alterStatus = (id: string) => {
    let index = listTasks.findIndex(task => task.id === id);
    if(index >= 0){
      const copyList = [...listTasks];
      copyList[index].isConcluded = !copyList[index].isConcluded;
      saveTasks(copyList);
      setListTasks(copyList);
    }
  } 

  const saveTasks = (tasksArr: ITask[]) => {
    const tasksString = JSON.stringify(tasksArr);
    localStorage.setItem('tasks', tasksString);
  }

  const isAValidText = (t: string) => {
    const taskEqual = listTasks.find(task => task.description.toLowerCase() === t.toLowerCase())
    if(!taskEqual) return true;
    return false;
  }


  return (
    <TaskContext.Provider
      value={{
        listTasks,
        addTask,
        alterStatus, 
        deleteTask,
        tasksFiltered,
        setSearchText,
        searchText,
        deleteAllTasks
      }}
    >
      {children}
    </TaskContext.Provider>
)
})

const useTask = () => useContext(TaskContext);

export { TaskProvider, useTask }