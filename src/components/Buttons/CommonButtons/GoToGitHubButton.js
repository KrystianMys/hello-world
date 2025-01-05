import { Button } from "@chakra-ui/react";

export const GoToGitHubButton = () => {
    return (
        <Button 
        _hover={{ backgroundColor: "darkcyan" }}
        color= "white"
        background= "skyblue"
        margin= "5px"
        width= "300px"
        border= "2px solid transparent"
        padding= "10px 20px"
        backgroundColor= "skyblue"
        cursor= "pointer"
        transition= "border-color 0.3s ease">
       <a href="https://github.com/KrystianMys/hello-world">GitHub</a></Button>
    );
};