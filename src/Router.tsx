import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import { TodoList } from "./components/TodoList";

export function Router() {
  return (
    <Routes>
      <Route path='/list' element={<TodoList />} />
      <Route path='/' element={<Register />} />
    </Routes>
  )
}