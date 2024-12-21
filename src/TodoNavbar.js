import React from "react";
import { Provider } from "@/components/ui/provider";
import { useNavigate } from "react-router-dom";
import { GoArrowUpLeft } from "react-icons/go"
import { Button } from "@chakra-ui/react";

const TodoNavbar = () => {
    const navigate = useNavigate();

    return (
        <div className="todo-header">
            <h1 style={{
                color: "skyblue",
                textAlign: "center",
                fontSize: "65px",
                fontWeight: "bold"
            }}>Todo List</h1>
            <Provider>
            <Button onClick={() => navigate('/hello-world')} style={{
                color: "white",
                backgroundColor: "skyblue",
                bottom: "80px",
                left: "15px"
            }}
            ><GoArrowUpLeft />Back to Home Page</Button>
        </Provider>
        </div >
    );
}

export default TodoNavbar;