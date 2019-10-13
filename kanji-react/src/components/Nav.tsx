import * as React from "react";
import { connect } from "react-redux";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { ICurrent } from "../types";

interface IProps {
  isAuthenticated: boolean | null;
  uuid: string | null;
}

const Header = ({ isAuthenticated, uuid }: IProps) => {
  const logInOut = isAuthenticated ? (
    <li className="nav-item">
      <NavLink to="/log-out" className="nav-link">
        Log out
      </NavLink>
    </li>
  ) : (
    <li className="nav-item">
      <NavLink to="/log-in" className="nav-link">
        Log in
      </NavLink>
    </li>
  );

  const mainLinks = isAuthenticated ? (
    <li className="nav-item">
      <NavLink to="/home" className="nav-link">
        Home
      </NavLink>
    </li>
  ) : (
    <>
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          Landing
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      {/* <p>Auth state: {isAuthenticated ? `Logged in user: ${uuid}` : "Logged out"}</p> */}
        <div className="container">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Test</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                  </Nav>
                  <Form inline>
                        <ul className="nav navbar-nav pull-xs-right">
                            {mainLinks}
                            <li className="nav-item">
                                <NavLink to="/terms" className="nav-link">
                                  Terms
                                </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink to="/broken-link" className="nav-link">
                                Broken link
                              </NavLink>
                            </li>
                            {logInOut}
                        </ul>
                  </Form>
                </Navbar.Collapse>
          </Navbar>
        </div>
    </>
  );
};

const mapStateToProps = (state: ICurrent) => ({
  uuid: state.uuid,
  isAuthenticated: state.isAuthenticated,
});

export default connect(
  mapStateToProps,
)(Header);
