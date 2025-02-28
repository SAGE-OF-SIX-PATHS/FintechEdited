import Navbar from "./Components/Navbar";
import FintechUI from "./Components/Section1";
import Collaborations from "./Components/Collaborations";
import ExpenseTracking from "./Components/ExpenseTracking";
import FeatureCards from "./Components/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <FintechUI />
      <Collaborations />
      <ExpenseTracking />
      <FeatureCards />
    </div>
  )
}

export default App;