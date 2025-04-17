import './App.css';
import {Header}  from "./components/Header/Header";
import {Loader} from "./components/Loader/Loader";
import { useData } from "./contexts/DataProvider.js";
import { NavRoutes } from "./routes/NavRoutes";


function App() {
  const { loading } = useData();

  return (
    <div className="App">
      <Header />
      {loading && <Loader />}
      <NavRoutes />
    </div>
  );
}

export default App;
