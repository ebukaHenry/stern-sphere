import React from 'react';
import Hero from '../components/Hero.jsx';
import Main from '../components/Main.jsx';
import About from '../components/About.jsx';

export default function Home () {
  return (
    <div className="home d-flex flex-col">
      <Hero />
      <Main />
      <About />
    </div>
  );
}