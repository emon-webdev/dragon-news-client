import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import LeftSideNav from "./LeftSideNav";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.email);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="text-center">
      <Navbar
        collapseOnSelect
        className="mb-3"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">Dragon News</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing">Categories</Nav.Link>
            </Nav>
            <Nav>
              {user?.uid ? (
                <>
                  <Link to="/profile">{user?.displayName}</Link>
                  <Link to="/profile">
                    {user?.photoURL ? (
                      <img
                        style={{
                          height: "30px",
                          borderRadius: "50%",
                          marginRight: "8px",
                        }}
                        src={user?.photoURL}
                        alt=""
                        srcSet=""
                      />
                    ) : (
                      <FaUser />
                    )}
                  </Link>
                  <Nav.Link>
                    <button onClick={handleLogout}>Log Out</button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <>
                    <Link to="/login">Login</Link>
                  </>

                  <>
                    <Link to="/register">Register</Link>
                  </>
                </>
              )}
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
