import { Input } from "@chakra-ui/react";

export const ChangeInputToEditTask = ({ inputValue, handleInputChange}) => {
    return (
        <Input
            placeholder="Enter Edit Task Here"
            value={inputValue}
            onChange={handleInputChange}
            style={{
                color: "black",
                fontWeight: "bold"
            }}
        />
    );
};