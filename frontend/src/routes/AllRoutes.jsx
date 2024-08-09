import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../pages/Hero";

const About = React.lazy(() => import("../pages/About.jsx"));
const Contact = React.lazy(() => import("../pages/Contact.jsx"));
const Services = React.lazy(() => import("../pages/Services.jsx"));
const Blogs = React.lazy(() => import("../pages/Blogs.jsx"));
const Register = React.lazy(() => import("../pages/Register.jsx"));
const Login = React.lazy(() => import("../pages/Login.jsx"));

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />

      <Route
        path="/about"
        element={
          <Suspense fallback={<div className="loader"></div>}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<div className="loader"></div>}>
            <Contact />
          </Suspense>
        }
      />

      <Route
        path="/services"
        element={
          <Suspense fallback={<div className="loader"></div>}>
            <Services />
          </Suspense>
        }
      />
      <Route
        path="/blogs"
        element={
          <Suspense fallback={<div className="loader"></div>}>
            <Blogs />
          </Suspense>
        }
      />

      <Route
        path="/register"
        element={
          <Suspense fallback={<div className="loader"></div>}>
            <Register />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<div className="loader"></div>}>
            <Login />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
