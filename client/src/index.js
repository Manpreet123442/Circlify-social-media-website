import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import { DarkModeContextProvider } from './context/DarkModeContext';
import { AuthContextProvider } from './context/AuthContext';
import Profile from './pages/profile/Profile';
import Update from './update/Update';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path = '/login' element = {<Login/>}/>
    <Route path = '/register' element = {<Register/>}/>
    <Route path = '/' element = {<App/>}>
    <Route path = '' element = {<Home/>}/>
    <Route path = 'profile/:id' element = {<Profile/>}/>
    </Route>
    <Route path='update' element = {<Update/>}/>
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeContextProvider>
    <AuthContextProvider>
    <RouterProvider router={router}/>
    </AuthContextProvider>
  </DarkModeContextProvider>
);
