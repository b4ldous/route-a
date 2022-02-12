import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import First from './pages/First'
import Second from './pages/Second'
import NoPage from './pages/NoPage'


ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<App />} />
      <Route path='first' element={<First/>}/>
      <Route path='second' element={<Second/>}/>
      <Route path='*' element={<NoPage/>}/>
    </Routes>    
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

