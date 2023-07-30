import "./Header.css";
import logo from "../../assets/img/logos/logotipo_2.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/" className="logo">
              <img src={logo} alt="Logo GeekShop" width="40" height="40" />
              GeekShop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Navbar.Brand href="/" className="logo">
                    <img
                      src={logo}
                      alt="Logo GeekShop"
                      width="40"
                      height="40"
                    />
                    GeekShop
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="/">Incio</Nav.Link>
                  <Nav.Link className="link" href="#destaques">Destaques</Nav.Link>
                  <Nav.Link className="link" href="#ultimos">Últimos Adicionados</Nav.Link>
                  <Nav.Link className="link" href="#sobre">Sobre Nos</Nav.Link>
                  <Nav.Link className="link" href="#contato">Contato</Nav.Link>
                </Nav>
                <Nav className="options">
                  <Nav.Link>
                    <i className="lni lni-cart"></i>
                  </Nav.Link>
                  <Nav.Link>
                    <i className="lni lni-user"></i>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
