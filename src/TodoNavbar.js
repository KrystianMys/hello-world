import React from "react";
import TodoButtonBackToHomePage from "./TodoButtonBackToHomePage";
import TodoTitle from "./TodoTitle";

const TodoNavbar = () => {

    return (
        <div className="todo-navbar">
            <TodoTitle />
            <TodoButtonBackToHomePage />
        </div >
    );
}

export default TodoNavbar;