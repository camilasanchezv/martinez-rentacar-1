import "./App.scss";
import { Grommet } from "grommet";
import "typeface-roboto";
import MainRouter from "./router";
import SidebarNavigation from "./components/Sidebar/Sidebar";
import { SnackbarProvider } from "notistack";
import Slide from "@material-ui/core/Slide";

import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppContextContainer from "./context";
import { Header, Loading } from "./components";
import { Login } from "./screens";

const history = createBrowserHistory();

const theme = {
  global: {
    hover: {
      background: "#242f40",
    },
    colors: {
      // Overriding existing grommet colors
      brand: "#242f40",
      accent: "#cca43b",
      focus: "#000",
      // Setting new colors
      blue: "#00C8FF",
      green: "#008147be",
      teal: "#82FFF2",
      purple: "#F740FF",
      red: "#FC6161",
      orange: "#FFBC44",
      yellow: "#FFEB59",
      // you can also point to existing grommet colors
      brightGreen: "accent-1",
      deepGreen: "neutral-2",
      background: "#e5e5e5",
      white: "#fff",
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
};


const MainComponent = () => {
  return (
    <div className="app-container">
      <SidebarNavigation />
      <div className="content-container">
        <Header />
        <MainRouter />
      </div>
    </div>
  );
};

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <MainComponent />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <Router history={history}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        TransitionComponent={Slide}
      >
        <AppContextContainer>
          <Loading />
          <Grommet theme={theme}>
            <AppRouter />
          </Grommet>
        </AppContextContainer>
      </SnackbarProvider>
    </Router>
  );
}

export default App;
