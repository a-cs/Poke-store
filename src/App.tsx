import React from 'react';
import Store from './components/Store';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="Components">
        <Store />
        <Cart />
      </div>
      <Footer />
    </>
  );
};

export default App;
