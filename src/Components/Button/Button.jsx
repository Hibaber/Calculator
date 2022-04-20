import React from "react";
import "../Button/Button.css"


const Button = (props) => {

    const isOperator = value => {
        return isNaN(value) && (value != ".") && (value != "=")
    };

    // let classString = "container-button"
    // if(isOperator) classString += " operator"
    // else classString += " "

    return (
        <div
            className={`container-button ${isOperator(props.children) ? " operator" : " "}`.trimEnd()}
            onClick={() => props.handleClick(props.children)}>
            {/* //ejecuta lo que se le pase por el padre */}
            {props.children}
        </div>
    )
}

export default Button;