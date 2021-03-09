import './App.scss';
import { Grommet } from 'grommet';
import 'typeface-roboto'
import MainRouter from './router';
import SidebarNavigation from './components/Sidebar/Sidebar';

import { CustomersList } from './components';

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppContextContainer from './context';
import { Loading } from './components';

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
    <AppContextContainer>
      <Loading />
      <Router history={history}>
        <Grommet theme={theme}>
          <div className="app-container">
            <SidebarNavigation />
            <div className="content-container">
              <MainRouter />
              <CustomersList />
            </div>
          </div>
        </Grommet>
      </Router>

    </AppContextContainer>
  )
}

export default App;
