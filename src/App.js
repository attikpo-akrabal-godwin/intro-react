import { BrowserRouter,Routes, Route , Navigate ,HashRouter } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Connexion from "./pages/Connexion";
import { Provider } from "react-redux";
import { store } from "./utils/lib/redux";

function App() {
  return (
    <>
      <Provider store={store}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Connexion/>} />
              <Route path="/calendar" element={<Calendar/>} />
            </Routes>
          </HashRouter> 
      </Provider>   
    </>
  );
}

export default App;
