// App.jsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import CanvasElementController from "./utils/CanvasElementController";

const App = () => {
  const [canvasHTML, setCanvasHTML] = useState("");
                                                        {/* export function */}
  const exportHTMLAndCSS = () => {
    if (!canvasHTML || canvasHTML.trim()===""){
      return;
    };

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = canvasHTML;

    let htmlString =
      "<!DOCTYPE html>\n<html>\n<head>\n<meta charset='UTF-8'>\n<title>Exported Canvas</title>\n</head>\n<body>\n";

    Array.from(tempDiv.children).forEach((child) => {
      const tagName = child.tagName.toLowerCase();
      const style = child.getAttribute("style") || "";
      const styleAttr = style ? ` style="${style}"` : "";
      const innerHTML = child.innerHTML || "";

      htmlString += `  <${tagName}${styleAttr}>\n    ${innerHTML}\n  </${tagName}>\n`;
    });

    htmlString += "</body>\n</html>";

    const blob = new Blob([htmlString], { type: "text/plain;charset=utf-8" });
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
      <Navbar handleExport={exportHTMLAndCSS} />
      <CanvasElementController>
        <Home setCanvasHTML={setCanvasHTML} />
      </CanvasElementController>
    </>
  );
};

export default App;
