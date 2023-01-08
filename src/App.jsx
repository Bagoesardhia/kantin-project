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
import RegisterScreen from './components/pages/registerScreen';
import OrderScreen from './components/pages/orderScreen';
import SetupScreen from './components/pages/setupScreen';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPages />} />
          <Route path="/intro" element={<IntroScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          {/* <Route path="/loginPages" element={<LoginPages/>} /> */}
          <Route path="/register" element={<RegisterScreen/>} />
          <Route path="/order" element={<OrderScreen/>} />
          <Route path="/setup" element={<SetupScreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
