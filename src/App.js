import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Lookbook from './components/Lookbook';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const AppContainer = styled.div`
  background: #FFFDF4;
  min-height: 100vh;
  color: #1a1a1a;
  font-family: 'Cormorant Garamond', serif;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <Collections />
      <Lookbook />
      <About />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;
