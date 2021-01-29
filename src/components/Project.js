import React, { Component } from "react";
import "../css/Project.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    const user = "medyenk";
    const git = "https://api.github.com/users/";
    const starred = "/starred";
    const url = git + user + starred;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          projects: result,
          isLoaded: true,
        });
      });
  }

  render() {
    if (this.state.isLoaded === true) {
      return (
        <Container fluid className="projects">
          <Row>
            <h1>Projects</h1>
          </Row>
          <Row>
            {this.state.projects.map((item) => (
              <Col className="outline" md={4}>
                <React.Fragment key={item.id}>
                  <h5>{item.name}</h5>
                  <p>Description: {item.description}</p>
                  <a href={item.clone_url}>
                    <Button variant="dark">Link to repository</Button>
                  </a>
                </React.Fragment>
              </Col>
            ))}
          </Row>
        </Container>
      );
    } else {
      return null;
    }
  }
}
