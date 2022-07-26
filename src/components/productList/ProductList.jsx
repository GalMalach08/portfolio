import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
          I invite you to take a look at the projects I built. I built three of
          the four projects independently, and one as part of the course. The
          projects are build with React(redux) on the client side,
          NodeJs(express) on the server side and MongoDB(atlas) is the data
          base. I believe that by building projects, you go through a learning
          process that is important in order to develop into an independent and
          experienced developer.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
