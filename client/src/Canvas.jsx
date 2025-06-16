import { useState, useContext, useRef, useEffect } from "react";
import { CanvasElementStore } from "./components/utils/CanvasElementController";
// import TextPanel from "./Components/utils/TextPanel";

const Canvas = ({
  element,
  preview,
  selectedElement,
  setSelectedElement,
  popDraggedElement,
  updateElementsById,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const { canvasElements, setCanvasElements } = useContext(CanvasElementStore);
  // const [selectedElement, setSelectedElement] = useState(null);
  // const [styleIdx, setStyleIdx] = useState(null);
  // const canvasRef = useRef(null);

  const isValidDrop = (element) => {
    return element.isContainer;
  };

  const findDraggedElement = (canvasElements, draggedId) => {
    for (let el of canvasElements) {
      if (el.id === draggedId) return el;

      if (el.children && el.children.length > 0) {
        let found = findDraggedElement(el.children, draggedId);
        if (found) return found;
      }
    }
    return null;
  };

  const isDescendant = (draggedElement, targetId) => {
    if (!draggedElement.children || draggedElement.children.length === 0) {
      return false;
    }

    for (let child of draggedElement.children) {
      if (child.id === targetId || isDescendant(child, targetId)) {
        return true;
      }
    }
    return false;
  };

  // const updateElementsById = (canvasElements, targetId, updateFn) => {
  //   return canvasElements.map((el) => {
  //     if (el.id === targetId) {
  //       return updateFn(el);
  //     }

  //     if (el.children && el.children.length > 0) {
  //       return {
  //         ...el,
  //         children: updateElementsById(el.children, targetId, updateFn),
  //       };
  //     }

  //     return el;
  //   });
  // };

  // const popDraggedElement = (canvasElements, draggedId) => {
  //   for (let el of canvasElements) {
  //     if (el.id === draggedId) {
  //       return {
  //         updated: canvasElements.filter((el) => el.id !== draggedId),
  //         extracted: el,
  //       };
  //     }

  //     if (el.children && el.children.length > 0) {
  //       const result = popDraggedElement(el.children, draggedId);
  //       if (result) {
  //         return {
  //           updated: canvasElements.map((e) =>
  //             e.id === el.id ? { ...e, children: result.updated } : e
  //           ),
  //           extracted: result.extracted,
  //         };
  //       }
  //     }
  //   }
  //   return null;
  // };

  const onElementDragStart = (e) => {
    e.stopPropagation();
    e.dataTransfer.setData("elementId", element.id);
    e.dataTransfer.effectAllowed = "move";
  };

  const onElementDragOver = (e) => {
    if (!isValidDrop(element)) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    setDragOver(true);
    e.dataTransfer.dropEffect = "move";
  };

  const onElementDragLeave = (e) => {
    if (!isValidDrop(element)) return;

    e.preventDefault();
    e.stopPropagation();

    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDragOver(false);
    }
  };

  const onElementDrop = (e) => {
    if (!isValidDrop(element)) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);

    const draggedId = e.dataTransfer.getData("elementId");

    if (draggedId === element.id) return;

    const draggedElement = findDraggedElement(canvasElements, draggedId);

    if (!draggedElement || isDescendant(draggedElement, element.id)) return;

    const result = popDraggedElement(canvasElements, draggedId);
    if (result) {
      const updatedElements = updateElementsById(
        result.updated,
        element.id,
        (el) => ({
          ...el,
          children: [...(el.children || []), result.extracted],
        })
      );

      setCanvasElements(updatedElements);
    }
  };

  const handleCanvasClick = (e, element) => {
    e.stopPropagation();
    if (preview) return;

    if (selectedElement?.id !== element.id) {
      setTimeout(() => {
        setSelectedElement(element);
      }, 0);
    } else {
      setSelectedElement(null);
      return;
    }

  };

  // const closeEditText = () => {
  //   setSelectedElement(null);
  // };

  // const updateElementStyle = (newStyle) => {
  //   setCanvasElements((prevElements) =>
  //     updateElementsById(prevElements, selectedElement.id, (el) => ({
  //       ...el,
  //       style: newStyle,
  //     }))
  //   );

  //   setSelectedElement((prev) => ({ ...prev, style: newStyle }));
  // };

  // useEffect(() => {
  //   // close EditText when clicking outside
  //   const handleClickOutside = (e) => {
  //     if (canvasRef.current && !canvasRef.current.contains(e.target)) {
  //       setSelectedElement(null);
  //       setStyleIdx(null);
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside);
  //   return () => document.removeEventListener("click", handleClickOutside);
  // },[]);

  // const DeleteCanvasElement = () =>{
  //   const updatedCanvas = popDraggedElement(canvasElements,selectedElement.id);
  //   setSelectedElement(null);
  //   setStyleIdx(null);

  //   setCanvasElements(updatedCanvas.updated)
  // }

  const Component = element.component;

  const elementStyle = {
    ...element.style,
    // ...(dragOver && isValidDrop(element)
    //   ? {
    //       backgroundColor: "rgba(59, 130, 246, 0.1)",
    //       borderColor: "#3b82f6",
    //       borderStyle: "solid",
    //     }
    //   : {}),
  };

  return (
    <>
      <Component
        {...element.props}
        draggable={true}
        onDragStart={onElementDragStart}
        onDragOver={onElementDragOver}
        onDragLeave={onElementDragLeave}
        onDrop={onElementDrop}
        onClick={(e) => handleCanvasClick(e, element)}
        // style = {elementStyle}
        style={
          (selectedElement?.id == element.id && !preview)
            ? { ...elementStyle, backgroundColor: "#aec9f5" }
            : elementStyle
        }
      >
        {element.children?.map((child) => (
          <Canvas
            element={child}
            key={child.id}
            preview={preview}
            selectedElement={selectedElement}
            setSelectedElement={setSelectedElement}
            popDraggedElement={popDraggedElement}
            updateElementsById={updateElementsById}
          />
        ))}
      </Component>

      {/* {selectedElement && selectedElement.id === element.id && (
        <div
          style={{
            position: "absolute",
            left: '200px',
            bottom: '10px',
            zIndex: 1000,
            minWidth:'300px'
          }}
        >
          <TextPanel
            element={selectedElement}
            onClose={closeEditText}
            onDelete={DeleteCanvasElement}
            styleIdx={styleIdx}
            setStyleIdx={setStyleIdx}
            onUpdate={updateElementStyle}
          />
        </div>
      )} */}
    </>
  );
};

export default Canvas;
