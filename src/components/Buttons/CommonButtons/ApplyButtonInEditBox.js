import { Button } from "@chakra-ui/react";

export const ApplyButtonInEditBox = ({ handleEditSubmit }) => {
    return (
        <Button onClick={handleEditSubmit} style={{
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