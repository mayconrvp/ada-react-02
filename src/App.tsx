import React from 'react';
import { Header } from './components/Header';
import { List } from './components/List';
import { Footer } from './components/Footer';
import { TodoList } from './components/TodoList';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { Router } from './Router';


function App() {   
  return (
    <>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </>
    
  );
}

export default App;
