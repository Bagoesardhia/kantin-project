import React from "react";

//Import Material from Library Material Tailwinds
import { Button } from "@material-tailwind/react";

// Import Material from Library Router
import { useNavigate } from "react-router-dom";

export default function splashScreen() {
  let navigate = useNavigate();
  return (
    <div className="splashScreen">
      <h1>INI SPLASH SCREEN</h1>
      <Button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        NEXT
      </Button>
    </div>
  );
}
