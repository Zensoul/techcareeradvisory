import Header from "./components/Header"
import Hero from "./components/Hero"
import WhoNotFor from "./components/WhoNotFor"
import WhoThisIsFor from "./components/WhoThisIsFor"
import ProblemSection from "./components/ProblemSection"
import TwoPathSection from "./components/TwoPathSection"
import NoOfferSection from "./components/NoOfferSection"
import ProcessOverview from "./components/ProcessOverview"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"


function App() {
  return <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
    <Header />
    <Hero />
    <WhoNotFor />
    <WhoThisIsFor />
    <ProblemSection />
    <TwoPathSection />    
    <ProcessOverview />
    <NoOfferSection />
    <FinalCTA />
    <Footer />
  </div>
}

export default App
