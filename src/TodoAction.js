import { IconButton, Button, Input } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import React, { useState } from "react";
import { FaPlus, FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";

const TodoAction = () => {
    const mocData = [
        { id: 1, name: 'Read a book', completed: false },
        { id: 2, name: 'Brush your teeth', completed: false },
        { id: 3, name: 'Have breakfast', completed: false },
        { id: 4, name: 'Train JS skills', completed: false },
        { id: 5, name: 'To dress a Christmas tree', completed: false }
    ];

    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState(mocData);
    const [isOpenBox, setIsOpenBox] = useState(false);
    const [isOpenEditBox, setIsOpenEditBox] = useState(false);
    const [editedTaskId, setEditedTaskId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);
    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    const handleButtonChange = () => {
        if (inputValue.trim()) {
            const newTask = { id: tasks.length + 1, name: inputValue, completed: false };
            setTasks((prevTasks) => [...prevTasks, newTask]);
        }
        setInputValue('');
        setIsOpenBox(false);
    };

    const handleEditButtonChange = (taskId) => {
        const taskToEdit = tasks.find((task) => task.id === taskId);
        setEditedTaskId(taskId);
        setInputValue(taskToEdit.name);
        setIsOpenEditBox(true);
    };

    const handleEditSubmit = () => {
        if (inputValue.trim()) {
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === editedTaskId ? { ...task, name: inputValue } : task
                )
            );
        }
        setInputValue('');
        setIsOpenEditBox(false);
    };

    const handleDelete = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const handleCheckboxChange = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const filteredTasks = tasks.filter((task) =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleClickCloseButtonAdd = () => {
        setIsOpenBox(false);
        setInputValue('')
    }

    const handleClickCloseButtonEdit = () => {
        setIsOpenEditBox(false);
        setInputValue('');
    }

    return (
        <Provider>
            <div className="todo-header">
                <IconButton
                    aria-label="Add Task"
                    onClick={() => setIsOpenBox(true)}
                    className="add-button"
                    style={{
                        left: "865px",
                        top: "60px"
                    }}
                >
                    <FaPlus />
                </IconButton>
                <Input
                    placeholder="Search Task"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
            </div>

            {isOpenBox && (
                <div className="box-overlay">
                    <div className="box-in">
                        <h1 style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>Add your task</h1>
  
                        <Input
                            placeholder="Enter Task Here"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="modal-input"
                        />
                        <Button onClick={handleClickCloseButtonAdd} className="close-button">
                            Close
                        </Button>
                        <Button onClick={handleButtonChange} className="apply-button">
                            Apply
                        </Button>
                    </div>
                </div>
            )}

            <div className="todo-list">
                {filteredTasks.map((task) => (
                    <div
                        key={task.id}
                        className={`todo-item ${task.completed ? 'completed' : ''}`}
                    >
                        <Checkbox
                            isChecked={task.completed}
                            onChange={() => handleCheckboxChange(task.id)}
                        >
                            <span>{task.name}</span>
                        </Checkbox>
                        <div className="action-buttons">
                        <Button onClick={() => handleEditButtonChange(task.id)} className="edit-button" >
                            <FaEdit />
                        </Button>
                        <Button onClick={() => handleDelete(task.id)} className="delete-button" color={"red"} backgroundColor={"blackAlpha.300"}>
                            <FaRegTrashAlt />
                        </Button>
                        </div>
                    </div>
                ))}
            </div>

            {isOpenEditBox && (
                <div className="edit-box-overlay">
                    <div className="edit-box-in">
                        <h1 style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>Edit Task</h1>
                        <Input
                            placeholder="Enter Edit Task Here"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="modal-input"
                        />
                        <Button onClick={handleClickCloseButtonEdit} className="close-button">
                            Close
                        </Button>
                        <Button onClick={ handleEditSubmit } className="apply-button">
                            Apply
                        </Button>
                    </div>
                </div>
            )}
        </Provider>
    );
};

export default TodoAction;



