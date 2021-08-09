import React from "react";
import avatar_1 from "../../img/avatar_1.jpg";

const SideNav = () => {
  return (
    <div className="intro-left">
      <img src={avatar_1} alt="avatar" className="avatar" />
      <p>Hustin Jeffers</p>
      <p>Web Developer</p>
    </div>
  );
};

export default SideNav;
