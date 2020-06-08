import React, { useState, useContext } from "react";
import img1 from "../img/modeling.jpg";
import img2 from "../img/videographer.jpg";
import img3 from "../img/photographer.jpg";
import img4 from "../img/guitar.jpg";
import img5 from "../img/piano.jpg";
import img6 from "../img/producer.jpg";
import img7 from "../img/webdev.jpg";
import { Link } from "react-router-dom";
import Box from "../components/landing/Box";
import CreativeContext from "../context/creative/creativeContext";
import ViewportContext from "../context/viewport/viewportContext";

const Landing = () => {
  const creativeContext = useContext(CreativeContext);
  const viewportContext = useContext(ViewportContext);
  const { setFilter } = creativeContext;
  const { width, breakpoint } = viewportContext;

  const [subCategories] = useState([
    {
      name: "3D Modeler",
      img: img1
    },
    {
      name: "Videographer",
      img: img2
    },
    {
      name: "Photographer",
      img: img3
    },
    {
      name: "Guitar",
      img: img4
    },
    {
      name: "Pianist",
      img: img5
    },
    {
      name: "Music Producer",
      img: img6
    },
    {
      name: "Web Developer",
      img: img7
    }
  ]);

  // TODO: Add the correct functionality for the filtering on the landing page

  return (
    <div className="landing">
      <div
        className="showcase"
        style={{
          minHeight: width < breakpoint ? "100vh" : "550px"
        }}
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
          {subCategories.map((item, index) => (
            <Box item={item} key={index} onClick={() => setFilter(item.name)} />
          ))}
          <Link to="/creatives" className="box">
            <div className="overlay"></div>
            <h3>Something Else...</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
