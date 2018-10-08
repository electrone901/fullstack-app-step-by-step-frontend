import React, { Component } from 'react';
import './App.css';

// import components
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Portfolio from './portfolio/Portfolio'
import Transactions from './transactions/Transactions'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
