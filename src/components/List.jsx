import React from 'react';
import Input from './Input';

const List = (props) => {
	
	var input = props.places.map(function (elem, index) {
		return (
			<Input key={index} onPlaceChange={props.onPlaceChange} value={elem} />
		);
	})

	console.log(input)
	return (
		<div>
			{props.title}

			{input}
		</div>
	);
};

export default List;