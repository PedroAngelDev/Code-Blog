import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import logo from '../../images/logo.svg'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color="dark" dark expand="sm" sticky="top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" height="40" width="40" className="mr-3" />
          {siteTitle}
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/tags" className="nav-link" style={{ color: 'white' }}>
                Tags
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/acerca-de"
                className="nav-link"
                style={{ color: 'white' }}
              >
                Acerca de
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
