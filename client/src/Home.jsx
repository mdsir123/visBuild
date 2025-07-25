import { useState, useContext, useEffect, useRef } from "react";
import { ElementLibrary, elementMap } from "./Components/ElementLibrary.js";
import SidebarElements from "./SidebarElements";
import Canvas from "./Canvas.jsx";
import { CanvasElementStore } from "./components/utils/CanvasElementController.jsx";
import StylingPanel from "./Components/utils/StylingPanel.jsx";

const Home = () => {
  const [activeType, setActiveType] = useState("text");
  const { canvasElements, setCanvasElements } = useContext(CanvasElementStore);
  const [preview, setPreview] = useState(false);
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  // export functionality array

  const canvasStyle =
    "bg-base-100 h-[95%] shadow-xl p-4  rounded-2xl overflow-y-scroll";
  const previewStyle =
    "bg-base-100 h-[84.5vh] shadow-xl p-4  rounded-2xl overflow-y-scroll";

  const canvasContainerStyle =
    "canvas-container bg-base-200 p-10 fixed h-[90.85vh] ml-[22.7rem] w-[72%]";
  const previewContainerStyle =
    "mockup-window bg-base-300 rounded-none absolute w-[100vw] overflow-x-hidden px-15 -mt-16 z-[100] [&>button]:ml-[80rem] [&>button]:btn-error";

  // ADD ELEMENT TO CANVAS USING BUTTON
  const handleAddElement = (element) => {
    const newElement = {
      id: crypto.randomUUID(),
      type: element.id,
      component: element.component,
      props: element.defaultProps,
      style: {
        boxSizing: "border-box",
        borderWidth: "2px",
        borderStyle: "dotted",
        borderRadius: "10px",
        padding: "10px 10px",
        margin: "1px",
      },
      isContainer: element.isContainer,
      children: element.children,
    };
    setCanvasElements((prev) => [...prev, newElement]);

    const newExportElement = {
      items: JSON.stringify(newElement),
      style: "margin: 10px;",
    };
    setElements((prev) => [...prev, newExportElement]);
  };

  const handleDragStart = (e, element) => {
    const newElement = {
      id: crypto.randomUUID(),
      type: element.id,
      props: element.defaultProps,
      style: {
        boxSizing: "border-box",
        borderWidth: "2px",
        borderStyle: "dotted",
        borderRadius: "10px",
        padding: "10px 10px",
        margin: "1px",
      },
      isContainer: element.isContainer,
      children: element.children,
    };
    e.dataTransfer.setData("Dragdata", JSON.stringify(newElement));
  };

  const popDraggedElement = (canvasElements, draggedId) => {
    for (let el of canvasElements) {
      if (el.id === draggedId) {
        return {
          updated: canvasElements.filter((el) => el.id !== draggedId),
          extracted: el,
        };
      }
      if (el.children && el.children.length > 0) {
        const result = popDraggedElement(el.children, draggedId);
        if (result) {
          return {
            updated: canvasElements.map((e) =>
              e.id === el.id ? { ...e, children: result.updated } : e
            ),
            extracted: result.extracted,
          };
        }
      }
    }
    return null;
  };

  const updateElementsById = (canvasElements, targetId, updateFn) => {
    return canvasElements.map((el) => {
      if (el.id === targetId) {
        return updateFn(el);
      }

      if (el.children && el.children.length > 0) {
        return {
          ...el,
          children: updateElementsById(el.children, targetId, updateFn),
        };
      }

      return el;
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const draggedId = e.dataTransfer.getData("elementId");

    if (draggedId) {
      const result = popDraggedElement(canvasElements, draggedId);
      if (result) setCanvasElements([...result.updated, result.extracted]);
    }

    const items = e.dataTransfer.getData("Dragdata");

    if (items) {
      const parsedItems = JSON.parse(items);
      let elementObj = elementMap[parsedItems.type];

      if (!elementObj) return;

      const fullElement = {
        id: parsedItems.id,
        type: parsedItems.type,
        style: parsedItems.style,
        props: parsedItems.props,
        component: elementObj.component,
        isContainer: parsedItems.isContainer,
      };

      setCanvasElements((prev) => [...prev, fullElement]);
      const newElement = { items, style: "margin: 10px;" }; // simple styles for demo
      const updatedElements = [...elements, newElement];
      setElements(updatedElements);
    }
  };

  

  const updateElementStyle = (newStyle) => {
    setCanvasElements((prevElements) =>
      updateElementsById(prevElements, selectedElement.id, (el) => ({
        ...el,
        style: newStyle,
      }))
    );

    setSelectedElement((prev) => ({ ...prev, style: newStyle }));
  };

  const DeleteCanvasElement = () => {
    const updatedCanvas = popDraggedElement(canvasElements, selectedElement.id);
    setSelectedElement(null);
    setCanvasElements(updatedCanvas.updated);
  };

  return (
    <div className="mt-16">
      {/* ELEMENT LIST */}
      <ul className="menu bg-base-300 fixed  h-[90.85vh] p-2 [&>*]:my-2 z-0">
        <li>
          <a
            className="tooltip tooltip-right"
            onClick={() => setActiveType("layout")}
            data-tip="Layout"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20ZM11 5H5V19H11V5ZM19 13H13V19H19V13ZM19 5H13V11H19V5Z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="tooltip tooltip-right"
            onClick={() => setActiveType("text")}
            data-tip="Text"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="tooltip tooltip-right"
            onClick={() => setActiveType("media")}
            data-tip="Media"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              // stroke=""
            >
              <path d="M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM5 13.9289V19H8.1005L11.0858 16.0147L7 11.9289L5 13.9289ZM10.9289 19H19V16.9289L16 13.9289L10.9289 19ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="tooltip tooltip-right"
            onClick={() => setActiveType("forms")}
            data-tip="Forms"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5H11V19H8V21H16V19H13V5H16V3H8V5ZM2 7C1.44772 7 1 7.44772 1 8V16C1 16.5523 1.44772 17 2 17H8V15H3V9H8V7H2ZM16 9H21V15H16V17H22C22.5523 17 23 16.5523 23 16V8C23 7.44772 22.5523 7 22 7H16V9Z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="tooltip tooltip-right"
            onClick={() => setActiveType("buttons")}
            data-tip="Buttons"
          >
            <svg
              fill="#000000"
              className="h-7 w-7"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-10.5 -10.5 370.92 370.92"
              // xml:space="preserve"
              stroke="#000000"
              strokeWidth="10"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke="#CCCCCC"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="XMLID_334_">
                  {" "}
                  <path
                    id="XMLID_852_"
                    d="M174.96,0C78.486,0,0,78.487,0,174.96s78.486,174.959,174.96,174.959s174.96-78.486,174.96-174.959 S271.434,0,174.96,0z M174.96,329.919C89.515,329.919,20,260.405,20,174.96S89.515,20,174.96,20S329.92,89.515,329.92,174.96 S260.405,329.919,174.96,329.919z"
                  ></path>{" "}
                  <circle
                    id="XMLID_888_"
                    cx="119.083"
                    cy="174.96"
                    r="34.123"
                  ></circle>{" "}
                  <circle
                    id="XMLID_889_"
                    cx="230.837"
                    cy="174.96"
                    r="34.123"
                  ></circle>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </li>
      </ul>

      <div
        className={
          preview
            ? `w-[100vw] h-[90vh] flex overflow-hidden`
            : `max-w-[95vw] flex  ml-16`
        }
      >
        {/* ELEMENT DISPLAY */}
        <div className="w-[25%] ">
          <div className="p-4 pb-2  text-xs opacity-60 ">
            Most Used Components
          </div>
          <ul className="list bg-base-100 shadow-md min-h-[85vh]">
            {ElementLibrary[activeType].map((element) => {
              return (
                <SidebarElements
                  element={element}
                  handleAddElement={handleAddElement}
                  handleDragStart={handleDragStart}
                  key={element.id}
                ></SidebarElements>
              );
            })}
          </ul>
        </div>

        {/* CANVAS */}
        <div className={preview ? previewContainerStyle : canvasContainerStyle}>
          <div
            id="canvas"
            className={`${
              preview ? previewStyle : canvasStyle
            } flex flex-wrap flex-start`}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {canvasElements.map((el) => (
              <Canvas
                element={el}
                key={el.id}
                preview={preview}
                selectedElement={selectedElement}
                setSelectedElement={setSelectedElement}
                popDraggedElement={popDraggedElement}
                updateElementsById={updateElementsById}
              />
            ))}
          </div>
          <button
            onClick={() => setPreview((prev) => !prev)}
            className="btn btn-sm btn-primary m-4 mx-2 w-32 rounded-xl float-end"
          >
            {preview ? "Close Preview" : "Live Preview"}
          </button>

          {selectedElement && !preview &&(
            <div
              style={{
                position: "absolute",
                left: "200px",
                bottom: "10px",
                zIndex: 1000,
                minWidth: "300px",
              }}
            >
              <StylingPanel
                element={selectedElement}
                onDelete={DeleteCanvasElement}
                onUpdate={updateElementStyle}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
