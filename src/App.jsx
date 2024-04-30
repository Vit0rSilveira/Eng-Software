import React from 'react';
import Destiny from './components/routers'
import { BrowserRouter} from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Home from './pages/home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
  );
}

export default App
