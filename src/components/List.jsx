 import React from 'react';
 
 const List = (props) => {
    //  console.log(props)
     let input = props.places.map(function(elem, index){
                return (
                    <div className="form-group" key={index}>
                        <input type="text" value={elem} className="form-control" id="" placeholder="Name"></input>
                    </div>
                
                )
            })
     return (
        <div>
            {props.title}
            
            {input}
        </div> 
     )
 };
 

export default List