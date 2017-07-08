import React, { Component } from 'react';
import List from './components/List';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      toEat: ['sushi', 'tacos', 'korean bbq'],
      eaten: ['american', 'italian', 'thai']
    }
  }

  render() {
    return (
      <div className="App container">
        <br></br>
        <div className="row">
          <div className="col-md-12">
            EATERY!!!
          </div>
          <div className="col-md-12">
            <button className="btn btn-primary">?</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <List title="Places to Eat" places={this.state.toEat} />
            <button className="btn btn-success">+</button>
          </div>
          <div className="col-sm-6">
            <List title="Places We've Eaten" places={this.state.eaten} />
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
