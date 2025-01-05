import "./App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GoToTodoAppButton } from "./components/Buttons/IconButtons/GoToTodoAppButton";
import { GoToGitHubButton } from "./components/Buttons/CommonButtons/GoToGitHubButton";
import { Box } from "@chakra-ui/react";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
      <Box style={{
        backgroundColor: "#DAE4DF",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white"
      }}>
        <h1 style={{
          color: "skyblue",
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          alignItems: "center",
          fontSize: "50px",
          fontWeight: "bold"
        }}>Welcome to home page</h1>
        <GoToTodoAppButton navigate={ navigate }/>
        <GoToGitHubButton />
      </Box>
  );
};
