import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import Header from './Components/Header';
import AdminPanel from './Components/AdminPanel';
import Inventory from './Components/Inventory';
import Order from './Components/Order';

class App extends Component {
  render() {
    return (
      <div className="App container">
      <Header className="row text-center"/>
      <div className="row">
      <Order className="col-xl-4"/>
      <Inventory className="col-xl-4" />
      <AdminPanel className="col-xl-4" />
      </div>
        
      </div>
    );
  }
}

export default App;
