import React from "react";
import ReactDOM from "react-dom";

const Product = ({ match, data }) => {
  const product = data.find(i => i.id == match.params.productId);
  let productView;
  if (product) {
    productView = (
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <hr />
        <h5>{product.status}</h5>
      </div>
    );
  } else {
    productView = <h2>Sorry, this product doesn't exist</h2>;
  }

  return <div>{productView}</div>;
};

export default Product;
