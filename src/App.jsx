import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pagse/Home';
import Course from './Pagse/Course';
import Books from './Pagse/Books';
import About from './Pagse/About';
import sotfware from './Pagse/sotfware';
import Contact from './Pagse/Contact';
import Coding from './Pagse/Coding';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Coding" element={<Coding/>} />
        <Route path="/Books" element={<Books/>} />
        <Route path="/Course" element={<Course/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/sotfware" element={<sotfware/>} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
