import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<App/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);


