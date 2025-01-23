import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MealPlans from "./pages/MealPlans";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Analytics />
        <SpeedInsights />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal-plans" element={<MealPlans />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
