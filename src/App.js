import './App.css';
import { Customer } from './screens';
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
        <Customer></Customer>
      </div>
    </Grommet>
  )
}

export default App;
