import { ChakraProvider } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from "./Components/general/Navbar";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Main from "./Pages/Main";
import theme from "./Styles/theme";
import Login from "./Pages/Login";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/registration/:step">
            <Registration />
          </Route>
          <Route path="/registration"><Redirect to="/registration/0" /></Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/login/:step">
            <Login />
          </Route>
          <Route path="/login"><Redirect to="/login/0" /></Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
