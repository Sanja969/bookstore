import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { id: 1, text: 'Books', url: '/books' },
    { id: 2, text: 'Categories', url: '/categories' },
  ];

  return (
    <nav className="container-fluid navbar navbar-expand-md navbar-dark bg-dark fixed-top p-2">
      <div className="container-fluid">
        <div className="navbar-brand">
          <span>Bookstore CMS</span>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto">
            {
              links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.url} className="nav-item text-decoration-none">
                    <p className="nav-link pt-4">
                      {link.text}
                    </p>
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
