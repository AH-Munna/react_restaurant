import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const NavBar = () => {
    return (
        <Navbar dark color="dark">
            <NavbarBrand href="/">React Restaurant</NavbarBrand>
        </Navbar>
    );
}

export default NavBar;