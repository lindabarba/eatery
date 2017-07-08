import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
            Places To Eat
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Email"></input>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Email"></input>
            </div>
            <button className="btn btn-success">+</button>
          </div>
          <div className="col-sm-6">
            Places Eaten
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Email"></input>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Email"></input>
            </div>
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
