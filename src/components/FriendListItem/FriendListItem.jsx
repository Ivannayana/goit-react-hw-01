import React from "react";
import PropTypes from "prop-types";
import style from "../FriendListItem/FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.friend - card}>
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className={style.friend - name}>{name}</p>
      <p
        className={`${style.status} ${isOnline ? style.online : style.offline}`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
