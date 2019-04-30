import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from '../src/store';

import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Header from '../src/components/nav/header'
import Footer from '../src/components/nav/footer'
import Landing from '../src/components/landing/landing';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
              <Route exact path="/" component={Landing}/>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
