import "./App.css";
import { Provider } from "@/components/ui/provider";
import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { GoArrowDownRight } from "react-icons/go";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Provider>
      <div class="App-header">
        <h1>Welcome to home page</h1>
        <Button onClick={() => navigate('/new')}>
          Get Started <GoArrowDownRight />
        </Button>
        <Button><a href="https://github.com/KrystianMys/hello-world">GitHub</a></Button>
      </div>
    </Provider>
  );
};

export default HomePage;
