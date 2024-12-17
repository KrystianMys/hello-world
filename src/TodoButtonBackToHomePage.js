import { Button } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import { useNavigate } from "react-router-dom";
import { GoArrowUpLeft } from "react-icons/go"

const TodoButtonBackToHomePage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/hello-world');
    }
    
    return (
        <Provider>
            <Button onClick={handleClick} style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                backgroundColor: "skyblue",
                color: "white",
                padding: "10px 20px",
                fontSize: "15px",
                borderRadius: "5px"
            }}><GoArrowUpLeft />Back to Home Page</Button>
        </Provider>
    );
}

export default TodoButtonBackToHomePage;