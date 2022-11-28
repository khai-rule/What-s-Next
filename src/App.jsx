import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './layouts/Layout';
import { useState } from "react";
import { useEffect } from 'react';
import BookInfo from './pages/BookInfo';
import Bestsellers from './pages/Bestsellers';
import Bookshelf from './pages/Bookshelf';

function App() {
  const [displayBookInfo, setDisplayBookInfo] = useState("wha");
  const [shelf, setShelf] = useState([])

  //TODO To set up Local storage
  //! Store saved books to local storage
  useEffect(() => {
  localStorage.setItem("books", JSON.stringify(shelf))
  }, [shelf])
  
  const addShelf = (book) => {
    if (shelf.some(title => title[0] === book[0])) {
      return
    } else {
      setShelf([...shelf, book])
    }
  }  

  const removeFromShelf = (i) => {
    shelf.splice(i, 1)
    setShelf([...shelf])
  }

  const getData = (book) => (
    setDisplayBookInfo(book)
  )
    
    return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home bookInfo={getData}/>} />
        <Route path="/bookinfo/title/:code" element={<BookInfo bookInfo={displayBookInfo}/>} />
        <Route path="/bestsellers" element={<Bestsellers bookInfo={getData} addShelf={addShelf} shelf={shelf}/>} />
        <Route path="/bookshelf" element={<Bookshelf removeFromShelf={removeFromShelf} shelf={shelf}/>} />
      </Route>
      </Routes>
    </BrowserRouter>
        )
      }
      
      export default App