import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/transactions" component={Transactions} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
