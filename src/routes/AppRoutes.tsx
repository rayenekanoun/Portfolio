// src/routes/AppRoutes.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "../pages/Projects";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
