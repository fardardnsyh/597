// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopStories from "/components/TopStories.jsx";
import SideNews from "/components/SideNews.jsx";
import FeaturedStories from "/components/FeaturedStories.jsx";
import TransferDeal from "/pages/TransferDeal.jsx";
import Contact from "/components/Contact.jsx";
import Header from "/components/Header.jsx";
import LiveScores from "/components/LiveScores.jsx";
import Footer from "/components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/livescore" element={<LiveScores />} />
          <Route path="/" element={<TopStories />} />
          <Route path="/news/:id" element={<TransferDeal />} />
        </Routes>
        <SideNews />
        <FeaturedStories />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
