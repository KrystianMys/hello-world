import { Button } from "@chakra-ui/react";
import { GoArrowUpLeft } from "react-icons/go"

export const BackToHomePageButton = ({ navigate }) => {
    return (
        <Button onClick={() => navigate('/hello-world')} 
        _hover={{ backgroundColor: "deepskyblue" }}
        color= "white"
        backgroundColor= "skyblue"
        position= "absolute"
        top= "15px"
        left= "15px"
        zIndex= "1000"
        ><GoArrowUpLeft />Back to Home Page</Button>
    );
};