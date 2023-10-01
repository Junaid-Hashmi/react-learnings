import { Header, Footer } from "./components";
import { Outlet } from "react-router";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
