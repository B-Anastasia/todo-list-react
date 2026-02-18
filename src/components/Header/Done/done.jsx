import React from 'react';
import "./done.scss";

const Done = ({toDo, done}) =>{
    return (
        <div className="done">
            <span>{toDo} more to do, {done} done</span>
        </div>
    );
}

export default Done;