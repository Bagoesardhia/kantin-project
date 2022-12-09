// Import Library
import React from 'react';
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Page to Routing
import SplashScreen from './components/pages/splashScreen'
import IntroScreen from './components/pages/introPages'
import DashboardScreen from './components/pages/dashboardScreen'
import LoginPages from './components/pages/loginPages'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/intro" element={<IntroScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/loginPages" element={<LoginPages/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
