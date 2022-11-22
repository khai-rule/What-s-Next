import './App.css'
import HomeSearch from './pages/HomeSearch'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from './pages/SearchResults';
import Layout from './layouts/Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomeSearch />} />
        <Route path="/search-results/:code" element={<SearchResults />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
