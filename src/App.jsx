import React from 'react';
// Components
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Routes/Home.jsx";
import Contact from './Routes/Contact.jsx';
import Detail from './Routes/Detail.jsx';
import Favs from './Routes/Favs.jsx';
// Router
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
      <div className="App">
          <Navbar />
          {/* Acá va Auth para crear dos rutas, una para logueado no logueado */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
