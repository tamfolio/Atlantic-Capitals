import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about-us" element={<AboutUs />}/>
    <Route path="/services" element={<Services />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/blog" element={<Blog />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);