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
import Certification from "./Pages/Certification";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/registration/:step" component={Registration} />
          <Route path="/registration"><Redirect to="/registration/0" /></Route>
          <Route path="/login/:step" component={Login} />
          <Route path="/login"><Redirect to="/login/0" /></Route>
          <Route path="/main/certification" component={Certification} />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
