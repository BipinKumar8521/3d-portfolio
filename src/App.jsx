import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Contact, Projects } from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
