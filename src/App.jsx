import Navbar from "./Components/Navbar";
import FintechUI from "./Components/Section1";
import Collaborations from "./Components/Collaborations";
import ExpenseTracking from "./Components/ExpenseTracking";
import FeatureCards from "./Components/Cards";
import InvestmentCard from "./Components/Assets";
import FAQSection from "./Components/FaqSection";

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
    </div>
  )
}

export default App;