import React from 'react';
import AppHeader from "./../Header/app-header";
import './app.scss';
import Center from "./../Center/center";

const App = () => {
    const todoData = [
        { label: 'Drink coffee', important: false, id: 1 },
        { label: 'I know React', important: true, id: 2 },
        { label: 'I am working as React Developer', important: true, id: 3 }
    ];

    return (
        <div className="main">
            <AppHeader toDo={1} done={3}/>
            <Center todos={todoData} />
        </div>
    );
}
export default App;