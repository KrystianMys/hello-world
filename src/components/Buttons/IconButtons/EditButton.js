import { Button } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";

export const EditButton = ({ handleEditButtonChange, task }) => {
    return (
        <Button onClick={() => handleEditButtonChange(task.id)} style={{
            backgroundColor: "#FFD700",
            color: "#000",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
            fontSize: "14px"
        }} >
            <FaEdit />
        </Button>
    );
};