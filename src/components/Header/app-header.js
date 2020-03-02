import React from 'react';
import './app-header.scss';
import Done from "./Done/done";

const AppHeader = (props) => {

    return (
        <div className="app-header">
            <h1>Todo List</h1>
            <Done toDo={props.toDo} done={props.done}/>
        </div> );
}

export default AppHeader;