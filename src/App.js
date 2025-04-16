import {Provider} from "react-redux"; 
import { BrowserRouter as Router,Route,Routes,} from 'react-router-dom';
// import store from './reducer/store';
import './App.css';
import  Header  from "./components/Header/Header";


function App() {
  return (
    <div className="App">
        {/* <Provider store = {store}> */}
          <Router>
            <Routes>
              <Route path="/" element = {<Header />}>
              </Route>
            </Routes>
          </Router>
        {/* </Provider> */}
    </div>
  );
}

export default App;
