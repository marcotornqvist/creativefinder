import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NavigationContext from "../../context/navigation/navigationContext";

const Results = () => {
  const navigationContext = useContext(NavigationContext);
  const { toggleSearch, results } = navigationContext;

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
      <div className="btn-container">
        <button>More</button>
      </div>
    </div>
  );
};

export default Results;
