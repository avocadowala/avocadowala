import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;