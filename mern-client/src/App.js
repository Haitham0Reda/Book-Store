import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import MyFooter from "./Components/Footer/MyFooter";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
}

export default App;
