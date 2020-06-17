import React, { useContext } from "react";
import CreativeContext from "../../context/creative/creativeContext";
import ProfileItem from "./Profiles/ProfileItem";

const Profiles = ({ showFilters, layout }) => {
  const creativeContext = useContext(CreativeContext);
  const { creatives } = creativeContext;

  return (
    !showFilters && (
      <div className={`profiles${layout ? " box-layout" : " line-layout"}`}>
        {creatives.map(item => (
          <ProfileItem key={item.userID} item={item} layout={layout} />
        ))}
      </div>
    )
  );
};

export default Profiles;
