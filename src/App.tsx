import React from 'react';
import Store from './components/Store';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Store />

      <Footer />
    </>
  );
};

export default App;
