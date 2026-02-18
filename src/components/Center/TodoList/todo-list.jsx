import React from 'react';
import ListItem from "./Item/list-item";
import './todo-list.scss';

const TodoList = ({todos, toDeleteItem, onToggleImportant, onToggleDone}) => {
    console.log(todos);
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <ListItem
                key={id}
                {...itemProps}
                toDeleteItem={()=>toDeleteItem(id)}
                onToggleImportant={()=>onToggleImportant(id)}
                onToggleDone={()=>onToggleDone(id)}
            />
            // <li className="list-group-item" >
            //     <ListItem {...itemProps} />
            // </li>
        );
    });

    return (
        <div className="todo-list">
            {elements}
        </div>
    );
};

export default TodoList;