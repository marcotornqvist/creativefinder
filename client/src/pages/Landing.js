import React, { useContext } from "react";
import guitar from "../img/guitar.jpg";
import piano from "../img/piano.jpg";
import producer from "../img/producer.jpg";
import modeling from "../img/modeling.jpg";
import videographer from "../img/videographer.jpg";
import photographer from "../img/photographer.jpg";
import webdev from "../img/webdev.jpg";
import { Link } from "react-router-dom";
import CreativeContext from "../context/creative/creativeContext";
import ViewportContext from "../context/viewport/viewportContext";

const Landing = () => {
  const creativeContext = useContext(CreativeContext);
  const viewportContext = useContext(ViewportContext);
  const { sidenavOpen } = creativeContext;
  const { width, breakpoint } = viewportContext;

  return (
    <div className="landing" style={{ overflow: sidenavOpen ? "hidden" : "" }}>
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
      {/* Make images in the boxes flex in width responsively */}
      <div className="content">
        <h2>
          Collaborate with Musicians, Designers &{" "}
          <Link to="/creatives">more</Link>
        </h2>
        <div className="boxes">
          <Link to="/creatives">
            <div className="box">
              <div className="overlay"></div>
              <h3>3D Modeler</h3>
              <img src={modeling} alt="3D Modeler" />
            </div>
          </Link>
          <Link to="/creatives">
            <div className="box">
              <div className="overlay"></div>
              <h3>Videographer</h3>
              <img src={videographer} alt="Videographer" />
            </div>
          </Link>
          <Link to="/creatives">
            <div className="box">
              <div className="overlay"></div>
              <h3>Photographer</h3>
              <img src={photographer} alt="photographer" />
            </div>
          </Link>
          <Link to="/creatives">
            <div className="box">
              <div className="overlay"></div>
              <h3>Guitarist</h3>
              <img src={guitar} alt="Guitarist" />
            </div>
          </Link>
          <Link to="/creatives">
            <div className="box">
              <div className="overlay"></div>
              <h3>Pianist</h3>
              <img src={piano} alt="Pianist" />
            </div>
          </Link>
          <Link to="/creatives">
            <div className="box">
              <div className="overlay"></div>
              <h3>Music Producer</h3>
              <img src={producer} alt="Producer" />
            </div>
          </Link>
          <Link to="/creatives">
            <div className="box">
              <div className="overlay"></div>
              <h3>Web Developer</h3>
              <img src={webdev} alt="Web Developer" />
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
