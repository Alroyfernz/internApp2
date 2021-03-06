import React, { useState } from "react";
import "./_navbar.scss";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

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
            <Link to="/" className="home_icon">
              Home
            </Link>
            <li>
              <Link to="/"> Posts</Link>
            </li>
          </ul>
          <Link to="/addPost" className="button">
            Add Posts
          </Link>
        </div>
        <span className={toggle ? "toggle_bar close" : "toggle_bar open"}>
          <FaBars style={{ color: "white" }} onClick={handleToggle} />
        </span>

        <span className={toggle ? "close_btn open" : "close_btn"}>
          <RiCloseLine className="close" onClick={handleToggle} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
