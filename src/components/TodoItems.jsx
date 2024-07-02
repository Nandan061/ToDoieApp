

import React from "react";

const TodoItems = (props) => {
    return (
        <li className="todo-items">
            {props.completed ?<></> : <input type="checkbox" />}
            <span className="todo-item-text">{props.text}</span>
            <span>...</span>
        </li>
    );
};

export default TodoItems;
