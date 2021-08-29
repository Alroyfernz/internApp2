import React, { useState } from "react";
import "./_navbar.scss";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    return setToggle(!toggle);
  };
  console.log(toggle);
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="brand" to="/">
          Posts App
        </Link>

        <div
          className={toggle ? "container_right open" : "container_right"}
          onClick={handleToggle}
        >
          <ul>
            <Link className="home_icon">Home</Link>
            <li>
              <a href="!#">Posts</a>
            </li>
            <li>
              <a href="!#">Contact</a>
            </li>
          </ul>
          <Link to="/addPost" className="button">
            Add Posts
          </Link>
        </div>
        <span className="toggle_bar">
          <FaBars style={{ color: "white" }} onClick={handleToggle} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
