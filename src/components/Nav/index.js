import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoImage from "../../assets/Hayley_Vuylsteke_Logo.gif";

function Navigation(props) {
  const pages = ['About', 'Qualifications', 'Portfolio', 'Contact']

    return (
      <header className="nav">
        <Container>
          <Row>
            <Col className="col-lg-3 col-md-12">
              <h2>
                <a data-testid="link" href="/">
                  <img src={logoImage} className="logo-image" alt="Hayley Vuylsteke" />
                </a>
              </h2>
            </Col>
            <Col className="col-lg-9 col-md-12">
              <Nav variant="pills" className="align-self-end">
                {pages.map(page => (
                <Nav.Item>
                  <Nav.Link eventKey={page} className={props.currentPage === page ? 'nav-link active' : 'nav-link'} href={'#' + page} onClick={() => props.handlePageChange(page)}> {page}</Nav.Link>
                </Nav.Item>
                ))}
              </Nav>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
  
  export default Navigation;