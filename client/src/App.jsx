// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./authentication/Login"
import Register from "./authentication/Register"
import Navbar from "./Navbar";
import Home from "./Home";
import CanvasElementController from "./components/utils/CanvasElementController";

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // removed canvasHTML useState for optim ising the code

  // Shared utility function
  const serializeElement = (element, indent = 2) => {
    if (element.nodeType !== 1) return ''; // skip non-element nodes

    const tag = element.tagName.toLowerCase();
    const style = element.getAttribute("style") || "";
    const styleAttr = style ? ` style="${style}"` : "";
    const indentStr = ' '.repeat(indent);

    let html = `${indentStr}<${tag}${styleAttr}>\n`;

    for (let child of element.childNodes) {
      if (child.nodeType === 1) {
        html += serializeElement(child, indent + 2);
      } else if (child.nodeType === 3) {
        const text = child.textContent.trim();
        if (text) {
          html += `${' '.repeat(indent + 2)}${text}\n`;
        }
      }
    }

    html += `${indentStr}</${tag}>\n`;
    return html;
  };

  const exportHTMLAndCSS = () => {
    const canvas = document.getElementById("canvas");
    if (!canvas) return;

    let htmlString =
      "<!DOCTYPE html>\n<html>\n<head>\n<meta charset='UTF-8'>\n<title>Exported Canvas</title>\n</head>\n<body>\n";

    for (let child of canvas.children) {
      htmlString += serializeElement(child);
    }

    htmlString += "</body>\n</html>";

    const blob = new Blob([htmlString], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "canvas-export.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>

    <Navbar handleExport={exportHTMLAndCSS}  />

    <Router>
      {isLoggedIn ? (
        <>
          
          <CanvasElementController>
            <Home />
          </CanvasElementController>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </Router>
    </>
  );
};

export default App;
