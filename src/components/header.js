import React from 'react'
import { Link } from 'gatsby'
import logo from "../images/logo.svg";
import Navbar from "../components/navbar";

const Header = ({ siteTitle }) => (
  <nav className="navbar is-spaced is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link
        to="/"
        className="navbar-item"
        title="Home"
      >
      <img src={logo} alt={siteTitle} />

      </Link>
    </div>
    <div className="navbar-menu">
        <Navbar />
    </div>
  </nav>
)

export default Header
