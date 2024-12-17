import React from "react";
import TodoNavbar from "./TodoNavbar";
import TodoAddingTasksButton from "./TodoAddingTasksButton";

const Todo = () => {

    return (
        <body>
            <div className="todo-header ">
                <TodoNavbar />
            </div>
            <div className="todo-content">
                <TodoAddingTasksButton />
            </div>
        </body>
    );
}

export default Todo;
