import { Button } from "@chakra-ui/react";

export const CloseButtonInEditBox = ({ handleClickCloseButtonEdit }) => {
    return (
        <Button onClick={ handleClickCloseButtonEdit } style={{
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