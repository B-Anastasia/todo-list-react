import React from 'react';
import './list-item.scss';
import Button from "../../../Button/button";

const ListItem = ({ label, important = false }) =>{
    const style = {
        color: important? 'tomato' : 'black'
    }       ;
    const edit=[
        {name: "important", path: "img/svg/warning.svg" }    ,
        {name: "bin",path: "img/svg/bin.svg"}

    ];
    const buttons = edit.map( (el)=> <Button id={el.name} path={el.path}/> )   ;
    return (
        <div className="list-item">
            <span style={style}
                  >
            {label}
        </span>
            <div className="list-item--button">
                {buttons}
            </div>
        </div>

    );
}

export default ListItem;
