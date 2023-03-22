import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";
import AboutMe from "./components/About-Me/AboutMe";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const sections = [
    
    { id: "about-me", title: "About Me" },
    { id: "portfolio", title: "Portfolio" },
    { id: "contact", title: "Contact" },
    { id: "resume", title: "Resume" },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} sections={sections}>
        {sections.map((section, index) => (
          <Link key={section.id} to={`/${section.id}`}>
            {section.title}
          </Link>
        ))}
      </Header>
      
      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;