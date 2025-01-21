import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MealPlans from "./pages/MealPlans";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal-plans" element={<MealPlans />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
