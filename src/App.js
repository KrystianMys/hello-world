import logo from "./logo.svg";
import "./App.css";
import { Provider } from "@/components/ui/provider";
import { Button } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
    <Provider>
      <div>
        <body>
          <h1>Hello World!</h1>
          <Button colorScheme="teal" size="lg">
            Chakra test
          </Button>
        </body>
      </div>
    </Provider>
  );
}

export default App;
