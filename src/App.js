import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './layouts/NavBar';

import Home from './views/Home';
import Search from './views/Search';
import Details from './views/Details';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Search />} />
        <Route path="/pokemones/:name" element={<Details />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
