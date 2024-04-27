import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";



const Header = ({addToCart}) => {
  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);
    return () => {
      window.removeEventListener("scroll", changeValueOnScroll);
    };
  }, []);

  

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" style={{color:"black"}}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/AboutUs" style={{color:"black"}}>
                About us
              </Nav.Link>
              <Nav.Link as={Link} sto="/menu" style={{color:"black"}}>
                Learning Modules
              </Nav.Link>
              <Nav.Link as={Link} to="/FeedBack" style={{color:"black"}}>
                FeedBack
              </Nav.Link>
              <Nav.Link as={Link} to="/Services" style={{color:"black"}}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/ContactUs" style={{color:"black"}}>
                Contact us
              </Nav.Link>
              <Nav.Link as={Link} to="/Login">
              <Button style={{backgroundColor:"#3468C0",paddingLeft:"25px", paddingRight:"25px"}}>Login</Button>{' '}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
