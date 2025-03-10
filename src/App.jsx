import Navbar from "./Components/Navbar";
import FintechUI from "./Components/Section1";
import Collaborations from "./Components/Collaborations";
import ExpenseTracking from "./Components/ExpenseTracking";
import FeatureCards from "./Components/Cards";
import InvestmentCard from "./Components/Assets";
import FAQSection from "./Components/FaqSection";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <FintechUI />
      <Collaborations />
      <ExpenseTracking />
      <FeatureCards />
      <InvestmentCard />
      <FAQSection />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App;