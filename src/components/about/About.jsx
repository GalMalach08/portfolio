import "./about.css";
import AboutImg from "../../img/about.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={AboutImg} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Graduate Full-Stack Course at John Bryce Institute. 669 unit veteran
          combat operator and commander. Experienced in project and schedule
          management. I have a high independent learning ability, ability to
          solve problems and think outside the box. I'm highly motivated to
          learn and develop.
        </p>
        <p className="a-desc">
          During the course I worked in a small team of programmers that was
          involved in building web applications for startup companies. In
          addition, I gave private lessons to some of the students of the
          course. I finished the course with the highest grades in the class and
          now I am looking for my next challenge to prove myself.
        </p>
      </div>
    </div>
  );
};

export default About;
