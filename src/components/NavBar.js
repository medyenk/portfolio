import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import SocialButtons from './Socials'
import "../css/NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Container>
          <Row>
            <Col>
              <Image className="headshot" src="IMG_6634.JPG" roundedCircle />
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Medyen Kadhum</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <Nav defaultActiveKey="#" className="flex-column">
                <Nav.Link href="#">Introduction</Nav.Link>
                <Nav.Link eventKey="link-1">Projects</Nav.Link>
                <Nav.Link eventKey="link-2">Contact</Nav.Link>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col>
              <SocialButtons />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
