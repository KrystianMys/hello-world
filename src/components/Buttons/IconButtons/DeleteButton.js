import { Button } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";

export const DeleteButton = ({ handleDelete, task }) => {
    return (
        <Button onClick={() => handleDelete(task.id)} style={{
            backgroundColor: "#FF4500",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
            fontSize: "14px"
        }} color={"red"} backgroundColor={"blackAlpha.300"}>
            <FaRegTrashAlt />
        </Button>
    );
};