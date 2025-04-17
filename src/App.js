import {Provider} from "react-redux"; 
import { BrowserRouter as Router,Route,Routes,} from 'react-router-dom';
// import store from './reducer/store';
import './App.css';
import  {Header}  from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
