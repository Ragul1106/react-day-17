import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg rounded-bottom mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Dynamic Routing Demo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/introduction">Intro to Dynamic Routing</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User Examples
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/user/123">Basic User (ID: 123)</Link></li>
                <li><Link className="dropdown-item" to="/user/456/Alice">Multi-Param User (ID: 456, Name: Alice)</Link></li>
                <li><Link className="dropdown-item" to="/user-optional/789">Optional Param User (ID: 789)</Link></li>
                <li><Link className="dropdown-item" to="/user-optional">Optional Param User (No ID)</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/user-default">User Default (No ID)</Link></li>
                <li><Link className="dropdown-item" to="/user-default/101">User Default (ID: 101)</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/user-validate/abc">User Validation (Invalid)</Link></li>
                <li><Link className="dropdown-item" to="/user-validate/123">User Validation (Valid)</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/999/posts">Nested Route (User 999 Posts)</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user-data/202">Fetch User Data (ID: 202)</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/navigation-links">Navigation Links</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/programmatic-navigation">Programmatic Navigation</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;