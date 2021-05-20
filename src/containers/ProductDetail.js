import react, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SelectProducts,RemoveSelectProducts } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const {image,title,price,category,description}=product;
  const { productID } = useParams();
  const dispatch = useDispatch();
  const fetchProductsDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productID}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(SelectProducts(response.data));
  };
  useEffect(() => {
    if (productID && productID !== "") 
      fetchProductsDetail();
      return ()=>{
          dispatch(RemoveSelectProducts());
      
    }
  }, [productID]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row"></div>
            <div className="column lp">
              <img className="ui fluid image" src={image} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetail;
