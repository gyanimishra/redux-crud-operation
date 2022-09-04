
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Main from './components/Main';
import Input from './components/Input';
import Edituser from './components/Edituser';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/'  element={<Main/>}/>
        <Route path='/input'  element={<Input/>}/>
        <Route path='/edituser/:id'  element={<Edituser/>}/>

      </Routes>
    </div>
  );
}

export default App;
