import { ChakraProvider } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Main from "./Pages/Main";
import theme from "./Styles/theme";
import Login from "./Pages/Login";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
