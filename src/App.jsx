import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import { Col, Container, Row } from "react-bootstrap";
import Main from "./components/Main";
import Player from "./components/Player";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={3} className="navBarr">
            <SideBar />
          </Col>
          <Col xs={9}>
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
            <Player />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
