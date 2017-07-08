import React from 'react';

const List = (props) => {
	console.log(props)
	return (
		<div>
			{props.title}
			<div className= "form-group" >
				<input type="text" className="form-control" id="exampleInputEmail1" placeholder="Email"></input>
      </div>
			<div className="form-group">
				<input type="text" className="form-control" id="exampleInputEmail1" placeholder="Email"></input>
			</div>
		</div>			
	);
};

export default List;




