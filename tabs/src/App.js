import React from 'react';
import './App.css';
import Tab from './components/tab.js';

function App() {
  return (
    <div className="App">
      <header>
        <div className="head">NobleIT</div>
        <div className="nav">
          <div className="menu"><a href="#">Home</a></div>
          <div className="menu"><a href="#">Services</a></div>
          <div className="menu"><a href="#">About Us</a></div>
          <div className="menu"><a href="#">Contact Us</a></div>
        </div>
      </header>
      <main>
        <h2>Our Services</h2>
        <p>Learning flexbox is easy</p>
        <Tab />
      </main>
    </div>
  );
}

export default App;
