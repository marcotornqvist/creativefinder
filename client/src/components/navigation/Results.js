import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import NavigationContext from "../../context/navigation/navigationContext";

const Results = () => {
  const [results] = useState([
    {
      id: 1,
      name: "Denzel Curry",
      field: "Rap Artist",
      status: "Contact",
      image:
        "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
    },
    {
      id: 2,
      name: "Denzel Curry",
      field: "Rap Artist",
      status: "Contact",
      image:
        "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
    },
    {
      id: 3,
      name: "Denzel Curry",
      field: "Rap Artist",
      status: "User",
      image:
        "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
    },
    {
      id: 4,
      name: "Denzel Curry",
      field: "Rap Artist",
      status: "User",
      image:
        "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
    },
    {
      id: 5,
      name: "Denzel Curry",
      field: "Rap Artist",
      status: "User",
      image:
        "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
    },
    {
      id: 6,
      name: "Denzel Curry",
      field: "Rap Artist",
      status: "User",
      image:
        "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
    },
    {
      id: 7,
      name: "Denzel Curry",
      field: "Rap Artist",
      status: "User",
      image:
        "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
    }
  ]);

  const navigationContext = useContext(NavigationContext);
  const { showSearch, toggleSearch } = navigationContext;

  return (
    <div className="results">
      <ul>
        {results.map(profile => (
          <Link to="/" key={profile.id}>
            <li className="profile" onClick={() => toggleSearch(!showSearch)}>
              <img src={profile.image} alt="profile" />
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
