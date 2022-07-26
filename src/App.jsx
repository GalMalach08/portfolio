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
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "#222",
        padding: "0px",
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
