import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

