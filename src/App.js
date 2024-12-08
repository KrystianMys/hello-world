import logo from "./logo.svg";
import "./App.css";
import { Provider } from "@/components/ui/provider";
import { Button } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
    <Provider>
      <div class="App App-header">
        <body>
          <h1>Hello World!</h1>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
          <Button color="green" bg={"blackAlpha.900"} m={15} colorScheme="purple" size="lg" aria-label="GitHub">
            <a href="https://github.com/KrystianMys/hello-world">GitHub</a>
          </Button>
        </body>
      </div>
    </Provider>
  );
}

export default App;
