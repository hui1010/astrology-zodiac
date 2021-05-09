import {useSelector} from 'react-redux'
import './App.css';

import InputComponent from './components/InputComponent'
import OutputComponent from './components/OutputComponent'


function App() {

  const showResult = useSelector(state => state.result.showResult)




  return (
 
      <div className="App">
        <InputComponent />
        {showResult && <OutputComponent />}
      </div>

  );
}

export default App;
