import React, { useContext } from "react";
import img1 from "../img/modeling.jpg";
import img2 from "../img/videographer.jpg";
import img3 from "../img/photographer.jpg";
import img4 from "../img/guitar.jpg";
import img5 from "../img/piano.jpg";
import img6 from "../img/producer.jpg";
import img7 from "../img/webdev.jpg";
import { Link } from "react-router-dom";
import CreativeContext from "../context/creative/creativeContext";
import ViewportContext from "../context/viewport/viewportContext";

const Landing = () => {
  const creativeContext = useContext(CreativeContext);
  const viewportContext = useContext(ViewportContext);
  const { setFilter } = creativeContext;
  const { width, breakpoint } = viewportContext;

  return (
    <div className="landing">
      <div
        className="showcase"
        style={{ minHeight: width < breakpoint ? "100vh" : "550px" }}
      >
        <div className="branding">
          <h1>Creativefinder</h1>
          <p>Find creative people to collaborate with.</p>
          <Link to="/sign-up">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
      <div className="content">
        <h2>
          Collaborate with Musicians, Designers &{" "}
          <Link to="/creatives">more</Link>
        </h2>
        <div className="boxes">
          <Link to="/creatives" onClick={() => setFilter("3D Modeler")}>
            <div className="box">
              <div className="overlay"></div>
              <h3>3D Modeler</h3>
              <img src={img1} alt="3D Modeler" />
            </div>
          </Link>
          <Link to="/creatives" onClick={() => setFilter("Videographer")}>
            <div className="box">
              <div className="overlay"></div>
              <h3>Videographer</h3>
              <img src={img2} alt="Videographer" />
            </div>
          </Link>
          <Link to="/creatives" onClick={() => setFilter("Photographer")}>
            <div className="box">
              <div className="overlay"></div>
              <h3>Photographer</h3>
              <img src={img3} alt="Photographer" />
            </div>
          </Link>
          <Link to="/creatives" onClick={() => setFilter("Guitarist")}>
            <div className="box">
              <div className="overlay"></div>
              <h3>Guitarist</h3>
              <img src={img4} alt="Guitarist" />
            </div>
          </Link>
          <Link to="/creatives" onClick={() => setFilter("Pianist")}>
            <div className="box">
              <div className="overlay"></div>
              <h3>Pianist</h3>
              <img src={img5} alt="Pianist" />
            </div>
          </Link>
          <Link to="/creatives" onClick={() => setFilter("Music Producer")}>
            <div className="box">
              <div className="overlay"></div>
              <h3>Music Producer</h3>
              <img src={img6} alt="Music Producer" />
            </div>
          </Link>
          <Link to="/creatives" onClick={() => setFilter("Web Developer")}>
            <div className="box">
              <div className="overlay"></div>
              <h3>Web Developer</h3>
              <img src={img7} alt="Web Developer" />
            </div>
          </Link>
          <Link to="/creatives">
            <div className="box">
              <div className="overlay"></div>
              <h3>Something Else...</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
