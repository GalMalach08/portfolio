import React, { useEffect } from "react";
import "./App.css";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useAppContext } from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const {
    state: { darkMode },
  } = useAppContext();

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#222" : "white";
  }, [darkMode]);

  return (
    <div
      style={{
        color: darkMode ? "white" : "#222",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <ToastContainer />
    </div>
  );
}

export default App;
