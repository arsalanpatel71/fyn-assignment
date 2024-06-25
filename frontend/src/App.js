import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Components from "./components/Components";
import Vehicles from "./components/Vehicles";
import Issues from "./components/Issues";
import RevenueChart from "./components/RevenueChart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/components" />} />
        <Route path="/components" element={<Components />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/chart" element={<RevenueChart />} />
      </Routes>
    </Router>
  );
}

export default App;
