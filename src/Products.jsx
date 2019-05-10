import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch } from "react-router-dom";
import Product from "./Product";

const Products = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available"
    },
    {
      id: 2,
      name: "Stylised Flip Flops and Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Out of Stock"
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available"
    },
    {
      id: 4,
      name: "ADIDAS Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock"
    }
  ];

  const productList = productsData.map(product => {
    return (
      <li>
        <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div>
        <h2>Products Page</h2>
        <ul>{productList}</ul>
      </div>

      <Route
        path={`${match.path}/:productId`}
        render={props => <Product data={productsData} {...props} />}
      />
      <Route
        exact
        path={`${match.path}`}
        render={() => <div>Please select a product</div>}
      />
    </div>
  );
};

export default Products;
