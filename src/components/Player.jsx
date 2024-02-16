import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";

const Player = () => {
  const selectedSong = useSelector((state) => state.selectedSong);
  console.log("TRACCIA SELEZIONATA", selectedSong);

  return (
    <>
      <div className=" bg-dark pt-1 mx-0">
        <Container fluid>
          <Row className="align-items-center">
            {selectedSong && (
              <div className="col-2 text-white">
                <Row className="align-items-center textSelected ">
                  <Col xs={9}>
                    <h2 className="">{selectedSong.title}</h2>
                    <p className="my-0 py-0">{selectedSong.artist}</p>
                  </Col>
                  <Col xs={3}>
                    <img
                      className="ms-4"
                      src={selectedSong.img}
                      alt="album img"
                    />
                  </Col>
                </Row>
              </div>
            )}
            <Col md={9}>
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Player;
