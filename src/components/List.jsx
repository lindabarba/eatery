import React from 'react';

const List = (props) => {
	console.log(props)

	var input = props.places.map(function (elem, index) {
		return (
			<div className="form-group" key={index}>
				<input type="text" className="form-control" id="exampleInputEmail1" value=				{elem}></input>
			</div>
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




