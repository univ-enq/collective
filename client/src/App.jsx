import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

// Import all pages
import Home from "./pages/Home";
import DirectorFounder from "./pages/Director&founder";
import DeepakKumar from "./pages/DeepakKumar";
import CoDirectorCoFounder from "./pages/Co-director&co-founder";
import JyotiDiwakar from "./pages/JyotiDiwakar";
import People from "./pages/People";
import LegalAdvisor from "./pages/LegalAdvisor";
import TechnicalAdvisor from "./pages/TechnicalAdvisor";
import ResearchCenters from "./pages/ResearchCenters";
import ResearchProjects from "./pages/ResearchProjects";
import Publications from "./pages/Publications";
import Internships from "./pages/Internships";
import Fellows from "./pages/Fellowship";
import StudentCalendar from "./pages/StudentCalender";
import LatestNews from "./pages/Latestnews";
import Events from "./pages/Events";
import Newsletter from "./pages/Newsletter";
import Achievements from "./pages/AchievementsPlaceholder";
import Contact from "./pages/Contact";
import Podcast from "./pages/Podcast";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/director-founder" element={<DirectorFounder />} />
            <Route path="/deepak-kumar" element={<DeepakKumar />} />
            <Route
              path="/co-director-co-founder"
              element={<CoDirectorCoFounder />}
            />
            <Route path="/jyoti-diwakar" element={<JyotiDiwakar />} />
            <Route path="/people" element={<People />} />
            <Route path="/legal-advisor" element={<LegalAdvisor />} />
            <Route path="/technical-advisor" element={<TechnicalAdvisor />} />
            <Route path="/research-centers" element={<ResearchCenters />} />
            <Route path="/research-projects" element={<ResearchProjects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/fellowship" element={<Fellows />} />
            <Route path="/student-calendar" element={<StudentCalendar />} />
            <Route path="/latest-news" element={<LatestNews />} />
            <Route path="/events" element={<Events />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
