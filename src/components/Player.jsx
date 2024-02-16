import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useSelector, useDispatch } from "react-redux";

const Player = () => {
  const selectedSong = useSelector((state) => state.selectedSong);

  return (
    <>
      <Row>
        <div className=" bg-dark pt-1">
          <Container fluid>
            <Row className=" flex-column justify-content-center align-items-center my-3">
              <Col xs={6} md={4} className="playerControls">
                <div className="row justify-content-evenly align-items-center">
                  <a href="#" className="col-1 p-0 mx-2">
                    <Image src="/public/images/shuffle.png" alt="shuffle" />
                  </a>
                  <a href="#" className="col-2 p-0 mx-2">
                    <Image src="/public/images/prev.png" alt="prev" />
                  </a>
                  <a href="#" className="col-1 p-0 mx-2">
                    <Image src="/public/images/play.png" alt="play" />
                  </a>
                  <a href="#" className="col-1 p-0 mx-2">
                    <Image src="/public/images/next.png" alt="next" />
                  </a>
                  <a href="#" className="col-1 p-0 mx-2">
                    <Image src="/public/images/repeat.png" alt="repeat" />
                  </a>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center my-4">
              <div className="progress col-4 px-0">
                <div role="progressbar"></div>
              </div>
            </Row>
          </Container>
        </div>
        {selectedSong && (
          <div>
            <h2>{selectedSong.title}</h2>
            <p>{selectedSong.artist}</p>
          </div>
        )}
      </Row>
    </>
  );
};

export default Player;
