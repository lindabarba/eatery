import React from 'react';
<<<<<<< HEAD

const List = (props) => {

  return (
  <div>
    {props.title}
    <div className="form-group">
      <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Email"></input>
    </div>
    <div className="form-group">
      <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Email"></input>
    </div>
  </div>
  );
=======
import Input from './Input';

const List = (props) => {

	var input = props.places.map(function(elem, index) {
	  	return (
	  		<Input key={index} onPlaceChange={props.onPlaceChange} value={elem} />
	  		);
	  })
	console.log(input);
	return (
		<div>
			{props.title}
      {input}
		</div>
	);
>>>>>>> 236fc1ce8b5e536f00a4f3d37178462b7785ad6b
};

export default List;
