import './App.css';
import { Welcome } from './screens';
import { Grommet } from 'grommet';
import 'typeface-roboto'


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
    <Grommet theme={theme}>
      <div className="App">
        <Welcome />
      </div>
    </Grommet>
  )
}

export default App;
