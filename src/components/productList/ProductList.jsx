import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import { Container, Row, Col } from "react-bootstrap";
const ProductList = () => {
  return (
    <Container fluid className="products_container">
      <div className="pl-text">
        <Row>
          <h1 className="pl-title">My Projects</h1>
          <p className="pl-desc">
            I built three of the four projects independently, and one as part of
            the course. The projects are build with React(redux) on the client
            side, NodeJs(express) on the server side and MongoDB(atlas) is the
            data base. I believe that by building projects, you go through a
            learning process that is important in order to develop into an
            independent and experienced developer.
          </p>
        </Row>
      </div>
      <Row>
        {products.map((item) => (
          <Col sm={12} lg={6}>
            <Product key={item.id} item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
