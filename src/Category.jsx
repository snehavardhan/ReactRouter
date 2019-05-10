import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch } from "react-router-dom";

const Category = ({ match }) => {
  return (
    <div>
      <h2>Categories Page</h2>
      <ul className="nav navbar-nav">
        <li>
          <Link to={`${match.url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${match.url}/clothing`}>Clothing</Link>
        </li>
        <li>
          <Link to={`${match.url}/accessories`}>Accessories</Link>
        </li>
      </ul>

      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            <h3>You have reached {match.params.name} page</h3>
          </div>
        )}
      />
    </div>
  );
};

export default Category;
