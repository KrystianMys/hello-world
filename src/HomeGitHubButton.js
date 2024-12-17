import { Button } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import React from "react";

const HomeGitHubButton = () => {

    return (
        <Provider>
            <Button
                color="white"
                bg={"skyblue"}
                m={15}
                colorScheme="purple"
                size="lg"
                aria-label="GitHub"  
            >
                <a href="https://github.com/KrystianMys/hello-world">GitHub</a>
            </Button>
        </Provider>
    );
}

export default HomeGitHubButton;