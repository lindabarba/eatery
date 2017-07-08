import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      toEat: ['sushi', 'poke', 'ramen'],
      eaten: ['american', 'italian', 'vegan']
    }
  }

  render() {
    return (
      <div className="App container">
        <br></br>
        <div className="row">
          <div className="col-md-12">
            EATERY
          </div>
          <div className="col-md-12">
            <button className="btn btn-primary">?</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <List title="Places To Eat" places={this.state.toEat} />
          </div>
            <button className="btn btn-success">+</button>
          <div className="col-sm-6">
            <List title="Places Eaten" />
          </div>
        </div>
        <div className="row">
          <button className="btn btn-danger">Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
