import { Color, IconButton } from "@chakra-ui/react"
import { Provider } from "@/components/ui/provider";
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import TodoBox from "./TodoBox";
import { Input } from "@chakra-ui/react"

const TodoAddingTasksButton = () => {

    const [inputValue, setInputValue] = useState('');

    const [displayText, setDisplayText] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const [isOpenBox, setIsOpenBox] = useState(false);

    const OpenBox = () => setIsOpenBox(true);

    const CloseBox = () => setIsOpenBox(false);

    const handleButtonChange = () => {
        setDisplayText(inputValue);
        setInputValue('');
        CloseBox(true);
    }

    return (
        <Provider>
            <div className="adding-task-button">
                <IconButton aria-label="Add Task" onClick={OpenBox}>
                    <IoIosAddCircleOutline />
                </IconButton>

                {isOpenBox && (
                    <div className="box-overlay">
                        <div className="box-in">
                            <h1>Add your task</h1>

                            <Button
                                onClick={CloseBox}
                                style={{
                                    background: "grey",
                                    bottom: "-100px",
                                    right: "115px",
                                    width: "200px"
                                }}
                            >
                                Close
                            </Button>

                            <Input
                                placeholder="Enter Task Here"
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                style={{
                                    backgroundColor: "red",
                                    marginBottom: "50px"
                                }}
                            />

                            <Button
                                onClick={handleButtonChange}
                                style={{
                                    backgroundColor: "green",
                                    bottom: "30px",
                                    left: "115px",
                                    width: "200px"
                                }}
                            >
                                Apply
                            </Button>
                        </div>
                    </div>
                )}

                {displayText && (
                    <div style={{
                        marginTop:"20px",
                        marginRight: "1070px",
                        padding: '10px',
                        backgroundColor: 'green',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}>
                        <strong>Task Added:</strong> {displayText}
                    </div>
                )}
            </div>
        </Provider>
    );
};


export default TodoAddingTasksButton;