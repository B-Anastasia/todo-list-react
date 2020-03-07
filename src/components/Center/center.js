import React from 'react';
import SearchPanel from "./Search/search-panel";
import TodoList from "./TodoList/todo-list";
import AddNew from "../AddNew/add-new";
import "./center.scss";

const Center = ({todos, toDeleteItem }) =>{
    console.log(todos);
    return (
        <div className="center">
            <SearchPanel/>
            <TodoList todos={todos} toDeleteItem={toDeleteItem}/>
            <AddNew />
        </div>
    );
}

export default Center;