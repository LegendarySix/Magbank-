import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardList from './components/CardList';
import CreditCard from './components/CreditCard';
import './App.scss';

import posts from './data/posts';

const App = () => (
  <div className='App'>
    <Navbar />
    <Hero />

    <CreditCard/>
    <CardList posts={posts} />
  </div>
);

export default App;