import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./product.css";

const Product = ({ item: { img, link, id, title, desc, features } }) => {
  return (
    <Card className="product_card mx-6 my-4" bg="light">
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <Card.Img
          src={require(`../../img/${img}`)}
          alt=""
          className={`p-img
               ${id === 4 ? "p-img-small" : id === 2 ? "p-img-shopping" : ""}`}
        />{" "}
      </div>
      <Card.Body className="p-4 product_body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <div className="product_desc">{desc}</div>
          <div className="product_feat">
            <h5 className="project-features-title">Main Features :</h5>

            <ul className="features-list">
              {features &&
                features.map((feature) => (
                  <li key={feature} className="features-list-item">
                    {feature}
                  </li>
                ))}
            </ul>
          </div>
        </Card.Text>
        <a href={link} target="_blank" rel="noreferrer">
          <Button className="visit_btn" variant="outline-success">
            Visit App
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default Product;
