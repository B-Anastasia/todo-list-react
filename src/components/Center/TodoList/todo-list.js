import React from 'react';
import ListItem from "./Item/list-item";
import './todo-list.scss';

const TodoList = ({todos}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (    <ListItem {...itemProps} />
            // <li className="list-group-item" key={id}>
            //     <ListItem {...itemProps} />
            // </li>
        );
    });

    return (
        <div className="todo-list">
            {elements}
        </div>
    );
}

export default TodoList;