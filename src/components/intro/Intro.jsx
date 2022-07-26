import "./intro.css";
import { useAppContext } from "../../context";
const Intro = () => {
  const {
    state: { darkMode },
  } = useAppContext();
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Gal Malach</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Fullstack Web Developer</div>
              <div className="i-title-item">Private Programming Teacher</div>
              <div className="i-title-item">Looking For My Next Challenge</div>
            </div>
          </div>
          <p className="i-desc">
            Hello everyone, welcome to my portfolio. This portfolio is built in
            React and designed responsively with pure css.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div
          className="i-bg"
          style={{ backgroundColor: darkMode ? "#59b256" : "#98cf96" }}
        ></div>
        {/* <img src={Me} alt="" className="i-img" /> */}
      </div>
    </div>
  );
};

export default Intro;
