import React, { Component } from 'react';
import List from './components/List';
import './App.css';
import List from './components/List';

class App extends Component {
<<<<<<< HEAD
  constructor() {
    super();
    this.state = {
      toEat: ['sushi', 'poke', 'ramen'],
      eaten: ['american', 'italian', 'vegan']
    }
  }

=======

  constructor() {
    super();
    this.state = {
      toEat: ['sushi', 'tacos', 'korean bbq'],
      eaten: ['american', 'italian', 'thai']
    }
  }

  onPlaceChange(data) {
    console.log("change", data.target.value)
  }

>>>>>>> 236fc1ce8b5e536f00a4f3d37178462b7785ad6b
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
<<<<<<< HEAD
            <List title="Places To Eat" places={this.state.toEat} />
=======
            <List title="Places to Eat" places={this.state.toEat} onPlaceChange={this.onPlaceChange}/>
            <button className="btn btn-success">+</button>
>>>>>>> 236fc1ce8b5e536f00a4f3d37178462b7785ad6b
          </div>
            <button className="btn btn-success">+</button>
          <div className="col-sm-6">
<<<<<<< HEAD
            <List title="Places Eaten" />
=======
            <List title="Places We've Eaten" places={this.state.eaten} onPlaceChange={this.onPlaceChange} />
>>>>>>> 236fc1ce8b5e536f00a4f3d37178462b7785ad6b
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
