import React from "react";

import Navbar from "../utilities/navbar";
import Find from "../utilities/find";
import Tabs from "../utilities/tabs";

export default function dashboardScreen() {
  return (
    <div className="dashboardScreen">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="mt-4">
        <Find />
      </div>
    </div>
  );
}
