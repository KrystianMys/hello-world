import React from "react";
import { Provider } from "@/components/ui/provider";
import { useNavigate } from "react-router-dom";
import { GoArrowUpLeft } from "react-icons/go"
import { Button } from "@chakra-ui/react";

const TodoNavbar = () => {
    const navigate = useNavigate();

    return (
        <div className="todo-app">
            <h1 style={{
                color: "skyblue",
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bold"
            }}>Todo List</h1>
            <Provider>
                <Button onClick={() => navigate('/hello-world')} style={{
                    color: "white",
                    backgroundColor: "skyblue",
                    position: "absolute", /* lub "fixed", jeśli ma pozostać na stałe na ekranie */
                    top: "15px", /* Odległość od góry */
                    left: "15px", /* Odległość od lewej krawędzi */
                    zIndex: 1000 /* Zapewnia, że przycisk będzie na wierzchu */
                }}
                ><GoArrowUpLeft />Back to Home Page</Button>
            </Provider>
        </div >
    );
}

export default TodoNavbar;