import './App.css';
import { Car, Customer } from './screens';
import { Grommet } from 'grommet';
import 'typeface-roboto'
import { CustomersList } from './components';


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
        <CustomersList />
      </div>
    </Grommet>
  )
}

export default App;
