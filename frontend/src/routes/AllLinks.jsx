import React from "react";
import { Link as RouterLink } from "react-router-dom";

const AllLinks = () => {
  return (
    <div>
      <RouterLink to={"/"}>Home</RouterLink>
      <RouterLink to={"/about"}>About</RouterLink>
      <RouterLink to={"/services"}>Services</RouterLink>
      <RouterLink to={"/contact"}>Contact</RouterLink>
      <RouterLink to={"/blogs"}>Blogs</RouterLink>
      <RouterLink to={"/login"}>Login</RouterLink>
      <RouterLink to={"/register"}>Register</RouterLink>
    </div>
  );
};

export default AllLinks;
