import React from "react";
import TodoNavbar from "./TodoNavbar";
import TodoAction from "./TodoAction";

const Todo = () => {

    return (
        <body>
            <div className="todo-header">
                <TodoNavbar />
            </div>
            <div className="todo-content">
                <TodoAction />
            </div>
        </body>
    );
}

export default Todo;
