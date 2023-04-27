import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Register = lazy(() => import("./components/Register"));
const TodoList = lazy(() => import("./components/TodoList"));

export function Router() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path='/list' element={<TodoList />} />
        <Route path='/' element={<Register />} />
      </Routes> 
    </Suspense>
  )
}