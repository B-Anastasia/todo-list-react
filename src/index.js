import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/Header/app-header";
import './index.scss';
import Center from "./components/Center/center";

const App = () => {
    const todoData = [
        { label: 'Drink coffee', important: false, id: 1 },
        { label: 'I know React', important: true, id: 2 },
        { label: 'I am working as React Developer', important: true, id: 3 }
    ];

    return (
        <div className="main">
            <AppHeader/>
            <Center todos={todoData} />
        </div>
    );
}

ReactDOM.render(<App/>,
    document.getElementById('root'));