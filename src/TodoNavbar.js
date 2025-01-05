import React from "react";
import { useNavigate } from "react-router-dom";
import { BackToHomePageButton } from "./components/Buttons/IconButtons/BackToHomePageButton";
import { Box } from "@chakra-ui/react";

export const TodoNavbar = () => {

    const navigate = useNavigate();

    return (
        <Box>
            <h1 style={{
                color: "skyblue",
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bold"
            }}>Todo List</h1>

            <BackToHomePageButton navigate={navigate} />
            
        </Box >
    );
};

