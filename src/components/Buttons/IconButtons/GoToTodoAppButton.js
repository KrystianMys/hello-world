import { Button } from "@chakra-ui/react";
import { GoArrowDownRight } from "react-icons/go";

export const GoToTodoAppButton = ({ navigate }) => {
    
    return (
        <Button onClick={() => navigate('/new')}
        _hover={{ backgroundColor: "deepskyblue" }}
        color= "white"
        background= "skyblue"
        margin= "5px"
        width= "300px"
        border= "2px solid transparent"
        padding= "10px 20px"
        backgroundColor= "skyblue"
        cursor= "pointer"
        transition= "border-color 0.3s ease">
            Get Started <GoArrowDownRight />
        </Button>
    );
};