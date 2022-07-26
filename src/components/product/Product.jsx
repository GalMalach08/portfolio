import { useAppContext } from "../../context";
import "./product.css";

const Product = ({ item: { img, link, id, title, desc, features } }) => {
  const {
    state: { darkMode },
  } = useAppContext();
  return (
    <div className="project-div">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: darkMode ? "white" : "#222" }}
      >
        <div
          className="project-desc"
          style={{ minHeight: id === 2 && "385px" }}
        >
          <h1 className="project-title">{title}</h1>
          <p className="project-content">{desc}</p>
          <div className="project-features">
            <h4 className="project-features-title">Main Features :</h4>

            <ul className="features-list">
              {features &&
                features.map((feature) => (
                  <li className="features-list-item">{feature}</li>
                ))}
            </ul>
          </div>
        </div>

        <div className="p">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <img
            src={img}
            alt=""
            className={
              id === 1
                ? "p-img p-img-easy"
                : id === 2
                ? "p-img p-img-shopping"
                : id === 3
                ? "p-img p-img-chat"
                : "p-img p-img-small"
            }
          />
        </div>
      </a>
    </div>
  );
};

export default Product;
