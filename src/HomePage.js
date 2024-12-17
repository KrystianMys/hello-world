import "./App.css";
import { Provider } from "@/components/ui/provider";
import React from "react";
import HomeGitHubButton from "./HomeGitHubButton";
import HomeGetStartedButton from "./HomeGetStartedButton";
import HomeTitle from "./HomeTitle";

const HomePage = () => {

  return (
    <Provider>
      <div class="App App-header">
        <HomeTitle />
        <HomeGetStartedButton />
        <HomeGitHubButton />
      </div>
    </Provider>
  );
};

export default HomePage;
