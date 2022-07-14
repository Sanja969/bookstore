import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { id: 1, text: 'BOOKS', url: '/books' },
    { id: 2, text: 'CATEGORIES', url: '/categories' },
  ];

  return (
    <nav className="container-fluid navbar navbar-expand-md navbar-light bg-white fixed-top">
      <div className="container-fluid d-flex align-items-center mx-0 px-0">
        <div className="navbar-brand fw-bold fs-3 ms-0 ps-0">
          <span className="fw-bold" style={{ color: '#0290ff' }}>Bookstore CMS</span>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse text-end justify-content-between text-center" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto">
            {
              links.map((link) => (
                <li key={link.id} className="link">
                  <NavLink
                    to={link.url}
                    className={({ isActive }) => (isActive ? 'active nav-item text-decoration-none' : 'nav-item text-decoration-none')}
                  >
                    <p className="nav-link pt-4">
                      {link.text}
                    </p>
                  </NavLink>
                </li>
              ))
            }
          </ul>
          <div className="avatar">
            <i className="bi bi-person-fill user" />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
