import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { selectSong } from "../redux/actions/selectSong";

const Main = () => {
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [hipHopSongs, setHipHopSongs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMusic = (artistName, setSongs) => {
      fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("RISPOSTA NON OK RICEVUTA DAL SERVER");
          } else {
            console.log("IN CONTATTO CON IL SERVER", response);
            return response.json();
          }
        })
        .then((data) => {
          console.log("DATI RICEVUTI", data);
          setSongs(data.data.slice(0, 4));
        })
        .catch((error) => {
          console.error("NESSUNA RISPOSTA RICEVUTA DAL SERVER", error);
        });
    };

    fetchMusic("queen", setRockSongs);
    fetchMusic("katyperry", setPopSongs);
    fetchMusic("eminem", setHipHopSongs);
  }, []);

  const handleSongClick = (song) => {
    const selectedSong = {
      title: song.title,
      artist: song.artist.name,
      img: song.album.cover_small,
      mp3: song.preview,
    };
    dispatch(selectSong(selectedSong));
  };

  const renderAlbumCard = (song) => {
    const handleAlbumClick = () => {
      handleSongClick(song);
    };
    return (
      <Col
        key={song.id}
        className="text-center text-white"
        onClick={handleAlbumClick}
      >
        <img className="img-fluid" src={song.album.cover_medium} alt="track" />
        <p>
          Track: <span className="fw-bold">{song.title}</span> <br />
          Artist: <span className="fw-bold">{song.artist.name}</span>
        </p>
      </Col>
    );
  };

  return (
    <Row>
      <main className="col-12 col-md-9 mainPage w-100 pt-3">
        <Row className="mainLinks d-none d-md-flex justify-content-center align-items-center">
          <a href="#" className="col-2 px-0 text-secondary  fw-bold">
            TRENDING
          </a>
          <a href="#" className="col-2 px-0 text-secondary  fw-bold">
            PODCAST
          </a>
          <a href="#" className="col-2 px-0 text-secondary  fw-bold">
            MOODS AND GENRES
          </a>
          <a href="#" className="col-2 px-0 text-secondary  fw-bold">
            NEW RELEASES
          </a>
          <a href="#" className="col-2 px-0 text-secondary  fw-bold">
            DISCOVER
          </a>
        </Row>
        <Row className="mt-3 justify-content-center">
          <Col xs={10}>
            <div id="rock">
              <h2 className="text-white text-start">Rock Classics</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {rockSongs.map((song) => renderAlbumCard(song))}
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10}>
            <div id="pop">
              <h2 className="text-white text-start">Pop Culture</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {popSongs.map((song) => renderAlbumCard(song))}
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10}>
            <div id="hiphop">
              <h2 className="text-white text-start">#HipHop</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {hipHopSongs.map((song) => renderAlbumCard(song))}
              </Row>
            </div>
          </Col>
        </Row>
      </main>
    </Row>
  );
};

export default Main;
