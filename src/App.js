import React from 'react';
import { Container } from 'react-bootstrap';

import './App.css';

import NavbarC from './component/Navbar/NavbarC';
import Home from './component/Home/Home';
import Videos from './component/Videos/Videos';
import Title from './component/Title/Title';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <NavbarC />
      <Home />
      <Title />
      <div style={{ "backgroundColor": "#f5f8fd" }}>
        <Container className="container-box rounded">
          <Videos />
        </Container>
      </div>
      <div style={{"backgroundColor": "#0c0c17"}}>
            <Container className="container-box rounded">
                <Footer />
            </Container>
        </div>
    </div>
  );
}

export default App;
