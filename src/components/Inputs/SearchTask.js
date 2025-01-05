import { Input } from "@chakra-ui/react";

export const SearchTask = ({ handleSearchChange }) => {
    return (
        <Input
            placeholder="Search Task"
            onChange={handleSearchChange}
            style={{
                flex: "1",
                padding: "10px",
                borderRadius: "5px",
                border: "2px solid white",
                color: "black",
                fontWeight: "bold"
            }}
        />
    );
};