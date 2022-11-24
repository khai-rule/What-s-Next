import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './layouts/Layout';
import { createContext, useState } from "react";
import { useEffect } from 'react';
import BookInfo from './pages/BookInfo';



export const DataContext = createContext();

function App() {



  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/book/:code" element={<BookInfo />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
