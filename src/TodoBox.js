import { Provider } from "@/components/ui/provider";
import { Button } from "@chakra-ui/react"

const TodoBox = () => {
    return (
        <div className="box-overlay">
            <div className="box-in">
            <h2>To jest okno</h2>
            <p>Witaj w modalnym oknie!</p>
            </div>
        </div>
    );
}

export default TodoBox;