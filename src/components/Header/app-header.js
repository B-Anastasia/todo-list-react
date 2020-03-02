import React from 'react';
import './app-header.scss';
import Done from "./Done/done";

const AppHeader = () => {

    return (
        <div className="app-header">
            <h1>Todo List</h1>
            <Done/>
        </div> );
}

export default AppHeader;