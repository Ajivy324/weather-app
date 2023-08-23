import React, {useState} from 'react';
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import './App.css';

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=miami&appid=c56414465ae3a579880df93041f886d6`


  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
      <Route element={<Main/>} path="/" default /> 
      </Routes>
    </BrowserRouter>    
    </div>
  );
}

export default App;
