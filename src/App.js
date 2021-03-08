import './App.scss';
import { Grommet } from 'grommet';
import 'typeface-roboto'
import MainRouter from './router';
import SidebarNavigation from './components/Sidebar/Sidebar';

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};


function App() {
  return (
    <Router history={history}>
      <Grommet theme={theme}>
        <div className="app-container">
          <SidebarNavigation />
          <div className="content-container">
            <MainRouter />
          </div>
        </div>
      </Grommet>
    </Router>
  )
}

export default App;
