import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from './pages/SearchResults';
import Layout from './layouts/Layout';
import { createContext, useState } from "react";
import { useEffect } from 'react';


export const DataContext = createContext();

function App() {



  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search-results/:code" element={<SearchResults />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
