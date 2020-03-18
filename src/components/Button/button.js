import React from 'react';
import ReactSVG from "react-svg";
import './button.scss';

const Button = (props) => {

    return (
             <button className={props.className} onClick={props.function}>
                 <ReactSVG  src={props.path} />
             </button>
    );
}

export default Button;