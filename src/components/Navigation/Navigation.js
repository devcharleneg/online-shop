/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,FormGroup,FormControl,Button,Glyphicon} from 'react-bootstrap'; 

class Navigation extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={3} title="Desktops" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Student</MenuItem>
               <MenuItem eventKey={3.2}>Gaming</MenuItem>
              <MenuItem eventKey={3.2}>Business</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Laptops" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Acer</MenuItem>
               <MenuItem eventKey={3.2}>Apple</MenuItem>
              <MenuItem eventKey={3.2}>Dell</MenuItem>
              <MenuItem eventKey={3.2}>HP</MenuItem>
              <MenuItem eventKey={3.2}>Toshiba</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Components" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>CPU</MenuItem>
              <MenuItem eventKey={3.2}>Case</MenuItem>
              <MenuItem eventKey={3.3}>Motherboard</MenuItem>
              <MenuItem eventKey={3.4}>Video Card</MenuItem>
              <MenuItem eventKey={3.3}>Storage</MenuItem>
              <MenuItem eventKey={3.3}>Memory</MenuItem>
              {/**<MenuItem divider />**/}
            </NavDropdown>
            <NavDropdown eventKey={3} title="Peripherals" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Monitor</MenuItem>
               <MenuItem eventKey={3.2}>Audio</MenuItem>
              <MenuItem eventKey={3.2}>Keyboard</MenuItem>
              <MenuItem eventKey={3.2}>Mouse</MenuItem>
            </NavDropdown>
          </Nav>
           <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
            <Button bsStyle="primary" type="submit"><Glyphicon glyph="search" /></Button>
          </Navbar.Form>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Login</NavItem>
            <NavItem eventKey={2} href="#">Sign Up</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withStyles(s)(Navigation);
