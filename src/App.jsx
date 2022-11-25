import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './layouts/Layout';
import { useState } from "react";
import { useEffect } from 'react';
import BookInfo from './pages/BookInfo';
import Bestsellers from './pages/Bestsellers';
import BestsellersDisplay from './components/BestsellersDisplay';

function App() {
  const [displayBookInfo, setDisplayBookInfo] = useState("wha");

  const getData = (book) => (
    setDisplayBookInfo(book)
    )
    

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home bookInfo={getData}/>} />
        <Route path="/bookinfo/title/:code" element={<BookInfo bookInfo={displayBookInfo}/>} />
        <Route path="/bestsellers" element={<Bestsellers bookInfo={getData}/>} />
        </Route>
        </Routes>
        </BrowserRouter>
        )
      }
      
      export default App
      
      // <Route path="/bestsellers/data" element={<BestsellersDisplay bookInfo={getData}/>} />