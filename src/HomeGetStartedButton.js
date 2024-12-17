import { Button } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import { useNavigate } from "react-router-dom";
import React from "react";
import { GoArrowDownRight } from "react-icons/go";

const HomeGetStartedButton = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new');

  }
  return (
    <Provider>
      <Button onClick={handleClick} color="white"
        bg={"skyblue"}
        m={15}
        colorScheme="purple"
        size="lg"
        aria-label="GitHub">
        Get Started <GoArrowDownRight />
      </Button>
    </Provider>
  );
}

export default HomeGetStartedButton;