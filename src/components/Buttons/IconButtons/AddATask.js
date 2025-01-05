import { IconButton } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export const AddATask = ({ setIsOpenBox }) => {
    return (
        <IconButton
            aria-label="Add Task"
            onClick={() => setIsOpenBox(true)} 
            _hover={{ backgroundColor: "deepskyblue" }}
            backgroundColor="skyblue"
            color="white"
            borderRadius="5px"
            padding="8px 12px"
            cursor="pointer"
        > <FaPlus /> </IconButton>
    );
};