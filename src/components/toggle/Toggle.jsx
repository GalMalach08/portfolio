import "./toggle.css";
import { useAppContext } from "../../context";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";

const Toggle = () => {
  const { dispatch, state } = useAppContext();
  const handleClick = () => {
    dispatch({ type: "TOGGLE" });
  };
  return (
    <div
      className="t"
      onClick={handleClick}
      style={{ backgroundColor: state.darkMode ? "white" : "#1C1F21" }}
    >
      <img src={Moon} alt="" className="t-icon" />
      <img src={Sun} alt="" className="t-icon" />
      <div className="t-button" style={{ left: state.darkMode ? 0 : 25 }}></div>
    </div>
  );
};

export default Toggle;
