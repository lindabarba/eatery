import React from 'react';

const Input = (props) => {

  return (
    <div className= "form-group" >
      <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Email" value={props.value} onChange={props.onPlaceChange}></input>
    </div>
  );
};

export default Input;
