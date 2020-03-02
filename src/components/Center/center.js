import React from 'react';
import SearchPanel from "./Search/search-panel";
import TodoList from "./TodoList/todo-list";
import AddNew from "../AddNew/add-new";

const Center = ({todos}) =>{
    console.log(todos);
    return (
        <div>
            <SearchPanel/>
            <TodoList todos={todos}/>
            <AddNew />
        </div>
    );
}

export default Center;