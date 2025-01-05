import { Button } from "@chakra-ui/react";

export const ApplyButtonInOpenBox = ({ handleButtonChange }) => {
    return (
        <Button onClick={handleButtonChange} style={{
            backgroundColor: "green",
            color: "white",
            width: "35%",
            marginTop: "15px",
            left: "20px"
        }}>
            Apply
        </Button>
    );
};