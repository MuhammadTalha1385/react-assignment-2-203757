import React from 'react';
import RegisterAgain from "./components/auth/RegisterAgain";
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/auth/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Front End/Home/Home';
import Forget from './components/auth/RegisterAgain';
import Update from './components/auth/UpdatePassword';
import Login from './components/auth/Login';
import Todo from './components/Front End/Todo/Todo';
import Correction from './components/auth/Correction';
import RegisteredUser from './components/Front End/RegisteredUsers';
import NoPage from './components/auth/NoPage';
import './scss/App.scss'
import TodoList from './components/Front End/Todo/TodoList';
import UpdatePassword from './components/auth/UpdatePassword';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/Forget' element={<Forget />} />
        <Route path='/update' element={<UpdatePassword />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/registerAgain' element={<RegisterAgain />} />
        <Route path='/correction' element={<Correction/> } />
        <Route path='/registeredUser' element={<RegisteredUser/> } />
        <Route path='*' element={<NoPage />} />
        <Route path='/todoList' element={<TodoList />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
