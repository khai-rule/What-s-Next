import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './layouts/Layout';
import { useState } from "react";
import BookInfo from './pages/BookInfo';
import Recommended from './pages/Recommended';
import Bookshelf from './pages/Bookshelf';
import AllBooks from './pages/AllBooks';

function App() {
  const [displayBookInfo, setDisplayBookInfo] = useState("wha");
  const [shelf, setShelf] = useState([])
  
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
      <Route path="/" element={<Layout shelf={shelf}/>}>
        <Route path="/" element={<Home bookInfo={getData}/>} />
        <Route path="/bookinfo/title/:code" element={<BookInfo bookInfo={displayBookInfo}/>} />
        <Route path="/books/recommended" element={<Recommended bookInfo={getData} addShelf={addShelf} shelf={shelf} removeFromShelf={removeFromShelf}/>} />
        <Route path="/bookshelf" element={<Bookshelf removeFromShelf={removeFromShelf} shelf={shelf}/>} />
        <Route path="/books/allbooks" element={<AllBooks bookInfo={getData} addShelf={addShelf} shelf={shelf} removeFromShelf={removeFromShelf}/>} />
      </Route>
      </Routes>
    </BrowserRouter>
        )
      }
      
      export default App