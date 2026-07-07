import "./styles/reset.css";
import { useState } from "react";
import "./App.css";
import Hero from "./Hero";
import "./styles/style.css";
import Main from "./mainPart";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";

function App() {
  return (
    <div className="layout">
      <Hero />
      <Main/>
    </div>
  );
}

export default App;
