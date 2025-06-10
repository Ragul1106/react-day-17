import React from 'react';
import { Link, useParams } from 'react-router-dom';

const NavigationLinks = () => {
  return (
    <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4 text-center"> 
      <h2 className="mb-3 h2 text-dark">Navigate with `Link` Component</h2> 
      <p className="text-body mb-4"> 
        Click these links to navigate to dynamic routes with predefined parameters.
      </p>
      <div className="d-grid gap-3"> 
        <Link
          to="/user/10"
          className="btn btn-success btn-lg shadow-sm" 
        >
          Go to User 10 Profile
        </Link>
        <Link
          to="/user/20/Bob"
          className="btn btn-warning btn-lg shadow-sm" 
        >
          Go to User 20 (Bob) Profile
        </Link>
        <Link
          to="/product/electronics/laptop-pro-x"
          className="btn btn-danger btn-lg shadow-sm" 
        >
          Go to Laptop-Pro-X Details (Electronics)
        </Link>
      </div>
    </div>
  );
};

const ProductDetails = () => {
  const { categoryId, productId } = useParams();
  return (
    <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4 text-center"> 
      <h2 className="mb-3 h2 text-dark">Product Details</h2> 
      <p className="text-body fs-5"> 
        📦 Category: <span className="fw-bold text-success">{categoryId}</span> 
      </p>
      <p className="text-body fs-5"> 
        🛍️ Product: <span className="fw-bold text-success">{productId}</span>
      </p>
      <p className="text-muted mt-2"> 
        (Route defined as `/product/:categoryId/:productId`)
      </p>
    </div>
  );
};

export { NavigationLinks, ProductDetails };