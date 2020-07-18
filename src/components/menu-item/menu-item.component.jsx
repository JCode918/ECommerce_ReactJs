import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";
/*
  withRouter is a Higher Order Component, it modifies the menu-item to give access to other methods, such as history
*/

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <p className="subtitle">Shop Now</p>
    </div>
  </div>
);

export default withRouter(MenuItem);
