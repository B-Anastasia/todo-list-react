import React from 'react';
import ReactSVG from "react-svg";
import './button.scss';

const Button = (props) => {
    console.log(props.path);
    return (
             <button className="button">
                 <ReactSVG  src={props.path} />
             </button>


    )  ;
}

export default Button;