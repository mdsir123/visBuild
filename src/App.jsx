// App.jsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

const App = () => {
  const [canvasHTML, setCanvasHTML] = useState("");

  const exportHTMLAndCSS = () => {
    console.log("code exported")
  };

  return (
    <>
      <Navbar handleExport={exportHTMLAndCSS} />
      <Home setCanvasHTML={setCanvasHTML} />
    </>
  );
};

export default App;
