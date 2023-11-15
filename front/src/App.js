import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles/styles.css';
import Header from './Header';
import Footer from './Footer';

import Body from './Body';

import Shop from './Shop';
import Producto from './Producto';

import MainWrapper from './layouts/MainWrapper';
import Motel from './crud/motel';
import Room from './crud/room';

function App() {
  return (
    <Router>          
      <MainWrapper>
      <div className="root">
      <Header />
        <Routes>        
        <Route path="/" element={<Body />} />{/* Ruta para la página About */}
            <Route path="/shop" element={<Shop />} /> {/* Ruta para la página About */}
            <Route path="/producto/:id" element={<Producto />} />
          <Route path="/crud/motel" element={<Motel />} />
          <Route path="/crud/room" element={<Room />} />
        </Routes>
        <Footer />
      </div>
      </MainWrapper>
    </Router>
  );
}


export default App;
