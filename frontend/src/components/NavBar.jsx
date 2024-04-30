import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <h1>Blog.IO</h1>
      </Link>
      <div>
        <NavLink to={"/"}>Posts</NavLink>
        <NavLink to={"/create-post"}>Create Post</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
