import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { SearchTask } from "./components/Inputs/SearchTask";
import { ChangeInputToAddTask } from "./components/Inputs/ChangeInputToAddTask";
import { AddATask } from "./components/Buttons/IconButtons/AddATask";
import { CloseButtonInOpenBox } from "./components/Buttons/CommonButtons/CloseButtonInOpenBox";
import { ApplyButtonInOpenBox } from "./components/Buttons/CommonButtons/ApplyButtonInOpenBox";
import { EditButton } from "./components/Buttons/IconButtons/EditButton";
import { DeleteButton } from "./components/Buttons/IconButtons/DeleteButton";
import { ChangeInputToEditTask } from "./components/Inputs/ChangeInputToEditTask";
import { CloseButtonInEditBox } from "./components/Buttons/CommonButtons/CloseButtonInEditBox";
import { ApplyButtonInEditBox } from "./components/Buttons/CommonButtons/ApplyButtonInEditBox";

const mocData = [
    { id: 1, name: 'Read a book', completed: false },
    { id: 2, name: 'Brush your teeth', completed: false },
    { id: 3, name: 'Have breakfast', completed: false },
    { id: 4, name: 'Train JS skills', completed: false },
    { id: 5, name: 'To dress a Christmas tree', completed: false }
];

export const TodoAction = () => {

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
        <Box>
            <Box style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                margin: "20px auto",
                width: "50%"
            }}>
                <SearchTask handleSearchChange={handleSearchChange} />
                <AddATask setIsOpenBox={ setIsOpenBox } />
            </Box>

            {isOpenBox && (
                <Box style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "1000"
                }}>
                    <Box style={{
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                        textAlign: "center",
                        width: "500px",
                    }}>
                        <h1 style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>Add your task</h1>

                        <ChangeInputToAddTask inputValue={inputValue} handleInputChange={ handleInputChange } />

                        <CloseButtonInOpenBox handleClickCloseButtonAdd={ handleClickCloseButtonAdd } />

                        <ApplyButtonInOpenBox handleButtonChange={ handleButtonChange } />

                    </Box>
                </Box>
            )}

            <Box style={{
                margin: "20px auto",
                width: "50%",
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}>
                {filteredTasks.map((task) => (
                    <Box
                        key={task.id}
                        className={`todo-item ${task.completed ? 'completed' : ''}`}
                    >
                        <Checkbox
                            isChecked={task.completed}
                            onChange={() => handleCheckboxChange(task.id)}
                        >
                            <span>{task.name}</span>
                        </Checkbox>
                        <Box style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center"
                        }}>
                           
                            <EditButton handleEditButtonChange={ handleEditButtonChange } task={ task } />

                            <DeleteButton handleDelete={ handleDelete } task={ task } />

                        </Box>
                    </Box>
                ))}
            </Box>

            {isOpenEditBox && (
                <Box style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "1000"
                }}  >
                    <Box style={{
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                        textAlign: "center",
                        width: "500px"
                    }}>
                        <h1 style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>Edit Task</h1>
                        
                        <ChangeInputToEditTask inputValue={ inputValue } handleInputChange={ handleInputChange } />

                        <CloseButtonInEditBox handleClickCloseButtonEdit={ handleClickCloseButtonEdit }/>

                        <ApplyButtonInEditBox handleEditSubmit={ handleEditSubmit } />

                    </Box>
                </Box>
            )}
        </Box>
    );
};