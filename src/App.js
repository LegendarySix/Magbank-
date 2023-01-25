import React from 'react';
import CreditCard from './components/CreditCard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.scss';

const App = () => (
  <div className='App'>
    <Navbar />
    <Hero />

    <CreditCard/>
  </div>
);

export default App;