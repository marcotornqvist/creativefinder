import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CreativeContext from "../../context/creative/creativeContext";

const Results = () => {
  const creativeContext = useContext(CreativeContext);
  const { toggleSearch, results } = creativeContext;

  return (
    <div className="results">
      <ul>
        {results.map(profile => (
          <Link to="/" key={profile.id} onClick={() => toggleSearch(false)}>
            <li className="profile" key={profile.id}>
              <div className="img-box">
                <img src={profile.image} alt="profile" />
              </div>
              <div>
                <h4 className="name">{profile.name}</h4>
                <span>Contact</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <button>More</button>
    </div>
  );
};

export default Results;
