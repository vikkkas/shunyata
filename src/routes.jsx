import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs.jsx/AboutUs";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          {/* Add more routes here as your application grows */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;