import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Hero from "./components/Hero"
import WhoNotFor from "./components/WhoNotFor"
import WhoThisIsFor from "./components/WhoThisIsFor"
import ProblemSection from "./components/ProblemSection"
import TwoPathSection from "./components/TwoPathSection"
import NoOfferSection from "./components/NoOfferSection"
import ProcessOverview from "./components/ProcessOverview"
import FinalCTA from "./components/FinalCTA"

import Home from "./pages/Home"
import Fresher from "./pages/Fresher"
import AI from "./pages/AI";
import SahaInternship from "./pages/SahaInternship";
import ApplySaha from "./pages/ApplySaha";



function AdvisoryPage() {
  return (
    <>
      <Hero />
      <WhoNotFor />
      <WhoThisIsFor />
      <ProblemSection />
      <TwoPathSection />
      <ProcessOverview />
      <NoOfferSection />
      <FinalCTA />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Header />

      <Routes>
        {/* NEW Gateway */}
        <Route path="/" element={<Home />} />

        {/* Your existing landing moved here */}
        <Route path="/advisory" element={<AdvisoryPage />} />

        {/* Existing page */}
        <Route path="/fresher" element={<Fresher />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/saha-internship" element={<SahaInternship />} />
        <Route path="/apply-saha" element={<ApplySaha />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App