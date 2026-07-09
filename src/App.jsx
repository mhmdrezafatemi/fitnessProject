import { useState } from "react";
import "./styles/reset.css";
import "./styles/globalStyles.css";
import Home from "./pages/Home";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";

function App() {
  return (
    <div className="layout">
      <Home />
    </div>
  );
}

export default App;
