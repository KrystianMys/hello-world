import { Input } from "@chakra-ui/react";

export const ChangeInputToAddTask = ({ inputValue, handleInputChange }) => {
    return (
        <Input
            placeholder="Enter Task Here"
            value={inputValue}
            onChange={ handleInputChange }
            style={{
                color: "black",
                fontWeight: "bold"
            }}
        />
    );
};