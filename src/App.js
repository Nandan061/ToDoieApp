import React from "react";
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import Button from './components/Button';
import CounterComponents from './components/CounterComponents';
import "./style.css";

const App = () => {
    return (
        <div className="todo-container">
            <CounterComponents />
            <Header title="ToDoie App"/>
            <TodoItems text="Wake up"/>
            <TodoItems text="Eat"/>
            <TodoItems text="Code"/>
            <Button />
        </div>
    );
};

export default App;
