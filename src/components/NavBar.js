import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Breadcrumb from "react-bootstrap/Breadcrumb";
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
              <h3>Medyen Kadhum</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Contact</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
