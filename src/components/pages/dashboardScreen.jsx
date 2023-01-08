import React from "react";

import Navbar from "../utilities/navbar";
import Find from "../utilities/find";
import Tabs from "../utilities/tabs";

export default function dashboardScreen() {
  var name = JSON.parse(localStorage.getItem("list"));
  return (
    <div className="dashboardScreen">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="mt-4">
        <p>Welcome {name}</p>
        <Find />
      </div>
    </div>
  );
}
