import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import bincaLogo from '../images/Binca-Logo-Dark.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="light" light expand="lg" fixed="top">
      <NavbarBrand href="#">
        <img
          src={bincaLogo}
          width={50}
          height={50}
          alt="Logo"
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Menu
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href="pages/food.html">Food</DropdownItem>
              <DropdownItem href="pages/desserts.html">Desserts</DropdownItem>
              <DropdownItem href="pages/drinks.html">Drinks</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="pages/about.html">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="pages/album.html">Album</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="pages/contact.html">Contact</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/" target="_blank">
              <i className="fa fa-facebook" aria-hidden="true" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" target="_blank">
              <i className="fa fa-envelope" aria-hidden="true" />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;