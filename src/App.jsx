import React from 'react';
import Destiny from './components/routers'
import { BrowserRouter} from 'react-router-dom';

import Home from './pages/home';

function App() {

  return (

    <BrowserRouter>
      <Destiny/>
    </BrowserRouter>
        
  );
}

export default App
