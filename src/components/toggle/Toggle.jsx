import "./toggle.css";
import { useAppContext } from "../../context";

const Toggle = () => {
  const { dispatch, state } = useAppContext();
  const handleClick = () => {
    dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t" onClick={handleClick}>
      <img
        src="https://res.cloudinary.com/malachcloud/image/upload/v1658841125/sun_dtv61v.png"
        alt=""
        className="t-icon"
      />
      <img
        src="https://res.cloudinary.com/malachcloud/image/upload/v1658841124/moon_r9rivz.png"
        alt=""
        className="t-icon"
      />
      <div className="t-button" style={{ left: state.darkMode ? 0 : 25 }}></div>
    </div>
  );
};

export default Toggle;
