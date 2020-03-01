import React from 'react';
import ListItem from "./Item/list-item";
import './todo-list.scss';

const TodoList = ({todos}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li className="list-group-item" key={id}>
                <ListItem {...itemProps} />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}

export default TodoList;