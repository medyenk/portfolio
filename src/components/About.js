import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default class About extends Component {
  render() {
    return (
      <div>
        <Container fluid="md">
          <Row>
            <Col>
              <br />
              <h2>Hi! I'm Medyen, and I'm a Full Stack web developer.</h2>
            </Col>
          </Row>
          <Row>
            <Col><p>I graduated from the University of Warwick with a Masters in Mechanical Engineering, however I soon realised that I never want to calculate the forces on a structure again.
                 I started training as a software engineer and haven't looked back.</p></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
