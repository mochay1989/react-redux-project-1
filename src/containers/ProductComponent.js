import react from "react";
import { useSelector } from "react-redux";
import {Link } from "react-router-dom";


const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      
      <div
        className="four  wide"
        key={id}
        style={{ height: "30vh", marginBottom: "10vh" }}
      >
          <Link to={`product/${id}`}>
        <div className="ui link cards">
          <div className="card" style={{ padding: 40 }}>
            <div className="image">
              <img src={image} alt={title} style={{ height: "20vh" }} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </Link>
      </div>

      
    );
  });
  return <> {renderList}</>;
};
export default ProductComponent;
