import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Project from "./components/Project"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <NavBar />
          </Col>
          <Col md={9}>
            <About />
            <Project />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
