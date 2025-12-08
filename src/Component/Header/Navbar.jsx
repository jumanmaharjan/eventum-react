import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav id="navigation" className="navigation d-none d-md-inline-block">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li className="menu-item-has-children">
            <a href="#!" onClick={(e) => e.preventDefault()}>
              Event
            </a>
            <ul>
              <li>
                <NavLink to="/event-list">Event List</NavLink>
              </li>
              <li>
                <NavLink to="/event-detail/1">Event Detail</NavLink>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#!" onClick={(e) => e.preventDefault()}>
              Pages
            </a>
            <ul>
              <li>
                <NavLink to="/feature">Feature</NavLink>
              </li>
              <li>
                <NavLink to="/feature-detail">Feature Detail</NavLink>
              </li>
              <li>
                <NavLink to="/sponsors">SPONSERS</NavLink>
              </li>
              <li>
                <NavLink to="/speaker">Our Speaker</NavLink>
              </li>
              <li>
                <NavLink to="/speaker-detail/1">Speaker DETAIL</NavLink>
              </li>
              <li>
                <NavLink to="/pricing">PRICING</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">GALLERY</NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/testimonial">Testimonial</NavLink>
              </li>
              <li>
                <NavLink to="/search">Search Result</NavLink>
              </li>
              <li>
                <NavLink to="/coming-soon">Coming Soon</NavLink>
              </li>
              <li>
                <NavLink to="/404">404 Page</NavLink>
              </li>
              <li>
                <NavLink to="/single-page">Single Page</NavLink>
              </li>
              <li>
                <NavLink to="/policy">Policy</NavLink>
              </li>
              <li>
                <NavLink to="/reservation">Reservation</NavLink>
              </li>
              <li>
                <NavLink to="/account">Log In</NavLink>
              </li>
              <li>
                <NavLink to="/confirmation">Confirmation</NavLink>
              </li>
              <li>
                <NavLink to="/recover-page">Account Recover</NavLink>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#!" onClick={(e) => e.preventDefault()}>
              Blog
            </a>
            <ul>
              <li>
                <NavLink to="/blog-archive">Blog List</NavLink>
              </li>
              <li>
                <NavLink to="/single-blog">Single Blog</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
