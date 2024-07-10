import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/landing";
import Projects from "./pages/projects";
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import Contact from "./pages/contact";
import DesignGallery from "./pages/design gallery";
import About from "./pages/about";
import Tiles from "./pages/design gallery/Tiles";
import Sanitary from "./pages/design gallery/Sanitary";
import Interior from "./pages/design gallery/Interior";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/interior-design" element={<DesignGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/interior" element={<Interior/>} />
          <Route path="/sanitary" element={<Sanitary />} />
          <Route path="/tiles" element={<Tiles />} />
      
        </Route>
      </Routes>
    </>
  );
}

export default App;
