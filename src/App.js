import './App.css';
import { Toaster } from "react-hot-toast";
import {Header}  from "./components/Header/Header";
import {Loader} from "./components/Loader/Loader";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { useData } from "./contexts/DataProvider.js";
import { NavRoutes } from "./routes/NavRoutes";



function App() {
  const { loading } = useData();

  return (
    <div className="App">
      <Header />
      {loading && <Loader />}
      <NavRoutes />
      <ScrollToTop />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: { duration: 1500 },
          error: { duration: 1500 },
        }}
        containerStyle={{
          top: "6rem",
        }}
      />
    </div>
  );
}

export default App;
