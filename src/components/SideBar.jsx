import { Row, Col, FormControl, Button } from "react-bootstrap";

const SideBar = () => {
  return (
    <>
      <Row className="flex-column justify-content-between vh-100">
        <Col>
          <Row className="justify-content-start mt-3">
            <img
              src="/public/images/logo.png"
              alt="Spotify Logo"
              className="col-7"
            />
          </Row>

          <Row>
            <Col className="mt-4">
              <a href="#" className="nav-link">
                <i className="bi bi-house-door-fill"></i>&nbsp; Home
              </a>
              <a href="#" className="nav-link mt-2">
                <i className="bi bi-book-fill"></i>&nbsp; Your Library
              </a>
              <div className="input-group mt-3">
                <FormControl
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button variant="outline-secondary" className="btn-sm h-100">
                  GO
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="h-100 align-items-end">
            <Col>
              <Row>
                <Button
                  variant="primary"
                  className="signup-btn mb-3"
                  type="button"
                >
                  Sign Up
                </Button>
              </Row>
              <Row>
                <Button
                  variant="primary"
                  className="login-btn mb-2"
                  type="button"
                >
                  Login
                </Button>
              </Row>
              <Row>
                <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SideBar;
