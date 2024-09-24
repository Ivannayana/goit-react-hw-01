import React from "react";
import style from "./Profile.module.css";
import "../Profile/Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.card}>
      <img src={image} alt="User avatar" className={style.avatar} />
      <h2>{name}</h2>
      <p>@{tag}</p>
      <p>{location}</p>
      <div className={style.stats}>
        <div>
          <p>{stats.followers}</p>
          <span>Followers</span>
        </div>
        <div>
          <p>{stats.views}</p>
          <span>Views</span>
        </div>
        <div>
          <p>{stats.likes}</p>
          <span>Likes</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
