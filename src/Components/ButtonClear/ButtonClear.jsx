import React from "react";


const ButtonClear = (props) => {

    return (
      <div className="clear-button" onClick={props.handleClear}>
         {props.children} 
      </div>  
    )
}

export default ButtonClear;