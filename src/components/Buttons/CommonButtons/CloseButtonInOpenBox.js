import { Button } from "@chakra-ui/react";

export const CloseButtonInOpenBox = ({ handleClickCloseButtonAdd }) => {
    return (
        <Button onClick={handleClickCloseButtonAdd} style={{
            backgroundColor: "gray",
            color: "white",
            marginTop: "15px",
            right: "25px",
            width: "35%"
        }}>
            Close
        </Button>
    );
};