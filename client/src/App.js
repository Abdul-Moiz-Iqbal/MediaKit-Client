import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

//react router dom
import { Outlet } from "react-router-dom";

//react cookie
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <div className="font-Poppins">
        <Outlet />
      </div>
    </CookiesProvider>
  );
}

export default App;
