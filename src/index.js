import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Location from './pages/location'
import './assets/MediaQuery.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<App />}/>
    <Route exact path="/shop" element={<Location />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
