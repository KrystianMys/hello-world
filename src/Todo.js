import React from "react";
import { TodoNavbar } from "./TodoNavbar";
import { TodoAction } from "./TodoAction";
import { Box } from "@chakra-ui/react";

export const Todo = () => {

    return (
        <Box style={{
            margin: "0",
            height: "100 %",
            backgroundColor: "#DAE4DF",
            fontFamily: "Arial, sans - serif"
        }}>
            <Box style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                margin: "auto",
                width: "50%"
            }}>
                
                <TodoNavbar />

            </Box>

            <TodoAction />

        </Box >
    );
};


