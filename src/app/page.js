"use client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "../components/HomeScreen";
import ContentScreen from "../components/ContentScreen";
import ProfileScreen from "../components/ProfileScreen";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/content/:title" element={<ContentScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </div>
    </Router>
  );
}
