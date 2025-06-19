const StylingPanel = ({ element, onDelete, onUpdate }) => {
  const { style, isContainer } = element;

  const [currPadY = "0px", currPadX = "0px"] = (
    style.padding || "0px 0px"
  ).split(" ");

  const [currMarY = "0px", currMarX = "0px"] = (
    style.margin || "0px 0px"
  ).split(" ");

  const [currBWidth = "1px", currBStyle = "dashed", currBColor = "#000000"] = (
    style.border || "1px dashed #000000"
  ).split(" ");
  const [currBRadius = "10px"] = (style.borderRadius || "10px").split(" ");

  const [currWidth = "10%"] = (style.width || "10%").split(" ");
  const [currHeight = "10%"] = (style.height || "10%").split(" ");

  const [currDir = "row", currWrap = "wrap"] = (
    style.flexFlow || "row wrap"
  ).split(" ");
  const [currJustify = "flex-start"] = (
    style.justifyContent || "flex-start"
  ).split(" ");
  const [currAlign = "flex-start"] = (style.alignItems || "flex-start").split(
    " "
  );

  const changeFlex = (e) => {
    const value = e.target.value;
    const classList = e.target.classList;

    const isDir = classList.contains("f-dir");
    const isWrap = classList.contains("f-wrap");
    const isJust = classList.contains("f-justify");

    let flexFlow = `${currDir} ${currWrap}`;
    let justifyContent = `${currJustify}`;
    let alignItems = `${currAlign}`;

    if (isDir) {
      flexFlow = `${value} ${currWrap}`;
    } else if (isWrap) {
      flexFlow = `${currDir} ${value}`;
    } else if (isJust) {
      justifyContent = `${value}`;
    } else {
      alignItems = `${value}`;
    }

    const newStyle = {
      ...style,
      flexFlow,
      justifyContent,
      alignItems,
    };
    onUpdate(newStyle);
  };

  const changeDimension = (e) => {
    const value = e.target.value;
    const isW = e.target.classList.contains("el-w");

    const width = isW ? `${value}%` : `${currWidth}%`;
    const height = isW ? `${currHeight}%` : `${value}%`;

    const newStyle = {
      ...style,
      width,
      height,
    };
    onUpdate(newStyle);
  };

  const toggleBold = (e) => {
    const newStyle = {
      ...style,
      fontWeight: style.fontWeight === "bold" ? "normal" : "bold",
    };
    onUpdate(newStyle);
  };

  const fontItalic = (e) => {
    const newStyle = {
      ...style,
      fontStyle: style.fontStyle === "italic" ? "normal" : "italic",
    };
    onUpdate(newStyle);
  };

  const toggleUnderline = (e) => {
    const newStyle = {
      ...style,
      textDecoration:
        style.textDecoration === "underline" ? "none" : "underline",
    };
    onUpdate(newStyle);
  };

  const changeFontFamily = (e) => {
    const newStyle = {
      ...style,
      fontFamily: e.target.value,
    };
    onUpdate(newStyle);
  };

  const changeFontSize = (e) => {
    const newStyle = {
      ...style,
      fontSize: e.target.value,
    };
    onUpdate(newStyle);
  };

  const changeBorder = (e) => {
    const value = e.target.value;

    const isBWth = e.target.classList.contains("b-width");
    const isBSty = e.target.classList.contains("b-style");
    const isBCol = e.target.classList.contains("b-color");
    const isBRad = e.target.classList.contains("b-radius");

    let border = `${currBWidth}px ${currBStyle} ${currBColor}`;
    let borderRadius = `${currBRadius}px`;

    if (isBWth) {
      border = `${value}px ${currBStyle} ${currBColor}`;
    } else if (isBSty) {
      border = `${currBWidth} ${value} ${currBColor}`;
    } else if (isBCol) {
      border = `${currBWidth} ${currBStyle} ${value}`;
    } else if (isBRad) {
      borderRadius = `${value}px`;
    }

    const newStyle = {
      ...style,
      border,
      borderRadius,
    };
    onUpdate(newStyle);
  };

  const changePadding = (e) => {
    const value = `${e.target.value}px`;
    const isX = e.target.classList.contains("pad-x");

    const padding = isX ? `${currPadY} ${value}` : `${value} ${currPadX}`;

    const newStyle = {
      ...style,
      padding,
    };
    onUpdate(newStyle);
  };

  const changeMargin = (e) => {
    const value = `${e.target.value}px`;
    const isX = e.target.classList.contains("mar-x");

    const margin = isX ? `${currMarY} ${value}` : `${value} ${currMarX}`;

    const newStyle = {
      ...style,
      margin,
    };
    onUpdate(newStyle);
  };

  const changeTextColor = (color) => {
    const newStyle = {
      ...style,
      color: color,
    };
    onUpdate(newStyle);
  };

  const changeBGColor = (color) => {
    const newStyle = {
      ...style,
      backgroundColor: color,
    };
    onUpdate(newStyle);
  };

  return (
    <>
      <div className="bg-white border-slate-200 shadow-lg border-2 rounded-lg p-2 min-w-max">
        <div className="flex flex-wrap gap-2 items-center">
          {/* Width-Height */}
          <div className="flex items-center">
            <div className="dropdown dropdown-top">
              <div
                tabIndex={0}
                role="button"
                onClick={(e) => e.preventDefault()}
                title="Dimensions"
                className="btn bg-transparent border-none px-1 h-7.25 shadow-2xl"
              >
                <svg
                  height="23px"
                  width="23px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  // fill={isContainer?"#000000":"#dadada"}
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M3 16H2v6h6v-1H3zM16 3h5v5h1V2h-6zm5 18h-5v1h6v-6h-1zM8 2H2v6h1V3h5z"></path>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                  </g>
                </svg>
              </div>
              {/* {isContainer? */}
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-26 p-1 mb-2.5 shadow-sm"
              >
                <li>
                  <div>
                    <label>W :</label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={parseInt(currWidth)}
                      onChange={(e) => changeDimension(e)}
                      className="el-w w-10 border-1 rounded-sm text-center"
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <label>H :</label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={parseInt(currHeight)}
                      onChange={(e) => changeDimension(e)}
                      className="el-h w-10 border-1 rounded-sm text-center"
                    />
                  </div>
                </li>
              </ul>
              {/* : <></>} */}
            </div>
          </div>

          {/* FlexBox */}
          <div className="flex items-center text-sm">
            <div className="dropdown dropdown-top">
              <div
                tabIndex={0}
                role="button"
                title="Flex"
                className="btn bg-transparent border-none px-0 h-7.25 shadow-2xl"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 20.4V14.6C14 14.2686 14.2686 14 14.6 14H20.4C20.7314 14 21 14.2686 21 14.6V20.4C21 20.7314 20.7314 21 20.4 21H14.6C14.2686 21 14 20.7314 14 20.4Z"
                    stroke={isContainer ? "#000000" : "#dadada"}
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M3 20.4V14.6C3 14.2686 3.26863 14 3.6 14H9.4C9.73137 14 10 14.2686 10 14.6V20.4C10 20.7314 9.73137 21 9.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z"
                    stroke={isContainer ? "#000000" : "#dadada"}
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M14 9.4V3.6C14 3.26863 14.2686 3 14.6 3H20.4C20.7314 3 21 3.26863 21 3.6V9.4C21 9.73137 20.7314 10 20.4 10H14.6C14.2686 10 14 9.73137 14 9.4Z"
                    stroke={isContainer ? "#000000" : "#dadada"}
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M3 9.4V3.6C3 3.26863 3.26863 3 3.6 3H9.4C9.73137 3 10 3.26863 10 3.6V9.4C10 9.73137 9.73137 10 9.4 10H3.6C3.26863 10 3 9.73137 3 9.4Z"
                    stroke={isContainer ? "#000000" : "#dadada"}
                    stroke-width="1.5"
                  ></path>
                </svg>
              </div>
              {isContainer ? (
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-38 p-1 mb-2.5 shadow-sm"
                >
                  <li>
                    <div>
                      <label>Dir :</label>
                      <select
                        className="f-dir border rounded px-1 w-16 py-1 text-xs"
                        value={currDir}
                        onChange={(e) => changeFlex(e)}
                      >
                        <option value="row">Row</option>
                        <option value="column">Column</option>
                        <option value="row-reverse">Row-Reverse</option>
                        <option value="column-reverse">Col-Reverse</option>
                      </select>
                    </div>
                  </li>

                  <li>
                    <div>
                      <label>Wrap :</label>
                      <select
                        className="f-wrap border rounded px-1 w-16 py-1 text-xs"
                        value={currWrap}
                        onChange={(e) => changeFlex(e)}
                      >
                        <option value="wrap">Wrap</option>
                        <option value="no-wrap">No Wrap</option>
                      </select>
                    </div>
                  </li>

                  <li>
                    <div>
                      <label>Justify :</label>
                      <select
                        className="f-justify border rounded px-1 w-16 py-1 text-xs"
                        value={currJustify}
                        onChange={(e) => changeFlex(e)}
                      >
                        <option value="flex-start">Start</option>
                        <option value="flex-end">End</option>
                        <option value="center">Center</option>
                        <option value="space-around">Around</option>
                        <option value="space-between">Between</option>
                        <option value="space-evenly">Evenly</option>
                      </select>
                    </div>
                  </li>

                  <li>
                    <div>
                      <label>Align :</label>
                      <select
                        className="f-align border rounded px-1 w-16 py-1 text-xs"
                        value={currAlign}
                        onChange={(e) => changeFlex(e)}
                      >
                        <option value="flex-start">Start</option>
                        <option value="flex-end">End</option>
                        <option value="center">Center</option>
                        <option value="stretch">Stretch</option>
                        <option value="baseline">Baseline</option>
                        <option value="normal">Normal</option>
                      </select>
                    </div>
                  </li>
                </ul>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* Font Family */}
          <select
            className="w-17 border rounded px-2 py-1 text-sm"
            onChange={changeFontFamily}
            value={style.fontFamily || "Arial, sans-serif"}
          >
            <option value="Arial, sans-serif">Arial</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="'Courier New', monospace">Courier</option>
            <option value="'Times New Roman', serif">Times</option>
            <option value="Helvetica, sans-serif">Helvetica</option>
          </select>

          {/* Font Size */}
          <select
            className="w-16 border rounded px-1 py-1 text-sm"
            onChange={changeFontSize}
            value={style.fontSize || "16px"}
          >
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
            <option value="30px">30px</option>
            <option value="36px">36px</option>
          </select>

          {/* Font Style Buttons */}
          <div className="flex border rounded">
            <button
              className={`px-3 py-1 text-sm font-bold border-r ${
                style.fontWeight === "bold"
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
              }`}
              onClick={(e) => toggleBold(e)}
            >
              B
            </button>
            <button
              className={`px-3 py-1 text-sm italic border-r ${
                style.fontStyle === "italic"
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
              }`}
              onClick={(e) => fontItalic(e)}
            >
              I
            </button>
            <button
              className={`px-3 py-1 text-sm underline ${
                style.textDecoration === "underline"
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
              }`}
              onClick={(e) => toggleUnderline(e)}
            >
              U
            </button>
          </div>

          {/* Border */}
          <div className="flex items-center text-sm">
            <div className="dropdown dropdown-top">
              <div
                tabIndex={0}
                role="button"
                title="Border"
                className="btn bg-transparent border-none px-1 h-7.25 shadow-2xl"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  class="bi bi-border-style"
                >
                  <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z"></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-1 mb-2.5 shadow-sm"
              >
                <li>
                  <div>
                    <label>Width :</label>
                    <input
                      type="number"
                      min={0}
                      value={parseInt(currBWidth)}
                      onChange={(e) => changeBorder(e)}
                      className="b-width w-10 border-1 rounded-sm text-center"
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <label>Style :</label>
                    <select
                      className="b-style border rounded px-1 w-12 py-1 text-xs"
                      value={currBStyle}
                      onChange={(e) => changeBorder(e)}
                    >
                      <option value="none">none</option>
                      <option value="solid">Solid</option>
                      <option value="dotted">Dotted</option>
                      <option value="dashed">Dashed</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div>
                    <label>Color :</label>
                    <input
                      type="color"
                      value={currBColor || "#000000"}
                      onChange={(e) => changeBorder(e)}
                      className="b-color w-11 h-7 rounded cursor-pointer"
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <label>Radius :</label>
                    <input
                      type="number"
                      min={0}
                      value={parseInt(currBRadius)}
                      onChange={(e) => changeBorder(e)}
                      className="b-radius w-10 border-1 rounded-sm text-center"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Padding */}
          <div className="flex items-center">
            <div className="dropdown dropdown-top">
              <div
                tabIndex={0}
                role="button"
                title="Padding"
                className="btn bg-transparent border-none px-1 h-7.25 shadow-2xl"
              >
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Layer_1"
                  xmlns:x="&amp;ns_extend;"
                  xmlns:i="&amp;ns_ai;"
                  xmlns:graph="&amp;ns_graphs;"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  enable-background="new 0 0 24 24"
                  xml:space="preserve"
                >
                  <metadata>
                    <sfw xmlns="&amp;ns_sfw;">
                      <slices></slices>
                      <slicesourcebounds
                        width="5"
                        height="9"
                        bottomleftorigin="true"
                        x="0"
                        y="-120"
                      ></slicesourcebounds>
                    </sfw>
                  </metadata>
                  <g>
                    <g>
                      <g>
                        <g>
                          <path d="M16,6H8C7.4,6,7,5.6,7,5s0.4-1,1-1h8c0.6,0,1,0.4,1,1S16.6,6,16,6z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M16,20H8c-0.6,0-1-0.4-1-1s0.4-1,1-1h8c0.6,0,1,0.4,1,1S16.6,20,16,20z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M19,17c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1s1,0.4,1,1v8C20,16.6,19.6,17,19,17z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M5,17c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1s1,0.4,1,1v8C6,16.6,5.6,17,5,17z"></path>
                        </g>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M23,24H1c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1v22C24,23.6,23.6,24,23,24z M2,22h20V2H2V22z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-24 p-1 mb-2.5 shadow-sm"
              >
                <li>
                  <div>
                    <label>X :</label>
                    <input
                      type="number"
                      min={0}
                      value={parseInt(currPadX)}
                      onChange={(e) => changePadding(e)}
                      className="pad-x w-10 border-1 rounded-sm text-center"
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <label>Y :</label>
                    <input
                      type="number"
                      min={0}
                      value={parseInt(currPadY)}
                      onChange={(e) => changePadding(e)}
                      className="pad-y w-10 border-1 rounded-sm text-center"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Margin */}
          <div className="flex items-center">
            <div className="dropdown dropdown-top">
              <div
                tabIndex={0}
                role="button"
                title="Margin"
                className="btn bg-transparent border-none px-1 h-7.25 shadow-2xl"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.49988 2.00012C1.77602 2.00012 1.99988 1.77626 1.99988 1.50012C1.99988 1.22398 1.77602 1.00012 1.49988 1.00012C1.22374 1.00012 0.999878 1.22398 0.999878 1.50012C0.999878 1.77626 1.22374 2.00012 1.49988 2.00012ZM4.49988 2.00012C4.77602 2.00012 4.99988 1.77626 4.99988 1.50012C4.99988 1.22398 4.77602 1.00012 4.49988 1.00012C4.22374 1.00012 3.99988 1.22398 3.99988 1.50012C3.99988 1.77626 4.22374 2.00012 4.49988 2.00012ZM7.99988 1.50012C7.99988 1.77626 7.77602 2.00012 7.49988 2.00012C7.22374 2.00012 6.99988 1.77626 6.99988 1.50012C6.99988 1.22398 7.22374 1.00012 7.49988 1.00012C7.77602 1.00012 7.99988 1.22398 7.99988 1.50012ZM10.4999 2.00012C10.776 2.00012 10.9999 1.77626 10.9999 1.50012C10.9999 1.22398 10.776 1.00012 10.4999 1.00012C10.2237 1.00012 9.99988 1.22398 9.99988 1.50012C9.99988 1.77626 10.2237 2.00012 10.4999 2.00012ZM13.9999 1.50012C13.9999 1.77626 13.776 2.00012 13.4999 2.00012C13.2237 2.00012 12.9999 1.77626 12.9999 1.50012C12.9999 1.22398 13.2237 1.00012 13.4999 1.00012C13.776 1.00012 13.9999 1.22398 13.9999 1.50012ZM1.49988 14.0001C1.77602 14.0001 1.99988 13.7763 1.99988 13.5001C1.99988 13.224 1.77602 13.0001 1.49988 13.0001C1.22374 13.0001 0.999878 13.224 0.999878 13.5001C0.999878 13.7763 1.22374 14.0001 1.49988 14.0001ZM1.99988 10.5001C1.99988 10.7763 1.77602 11.0001 1.49988 11.0001C1.22374 11.0001 0.999878 10.7763 0.999878 10.5001C0.999878 10.224 1.22374 10.0001 1.49988 10.0001C1.77602 10.0001 1.99988 10.224 1.99988 10.5001ZM1.49988 8.00012C1.77602 8.00012 1.99988 7.77626 1.99988 7.50012C1.99988 7.22398 1.77602 7.00012 1.49988 7.00012C1.22374 7.00012 0.999878 7.22398 0.999878 7.50012C0.999878 7.77626 1.22374 8.00012 1.49988 8.00012ZM1.99988 4.50012C1.99988 4.77626 1.77602 5.00012 1.49988 5.00012C1.22374 5.00012 0.999878 4.77626 0.999878 4.50012C0.999878 4.22398 1.22374 4.00012 1.49988 4.00012C1.77602 4.00012 1.99988 4.22398 1.99988 4.50012ZM13.4999 11.0001C13.776 11.0001 13.9999 10.7763 13.9999 10.5001C13.9999 10.224 13.776 10.0001 13.4999 10.0001C13.2237 10.0001 12.9999 10.224 12.9999 10.5001C12.9999 10.7763 13.2237 11.0001 13.4999 11.0001ZM13.9999 7.50012C13.9999 7.77626 13.776 8.00012 13.4999 8.00012C13.2237 8.00012 12.9999 7.77626 12.9999 7.50012C12.9999 7.22398 13.2237 7.00012 13.4999 7.00012C13.776 7.00012 13.9999 7.22398 13.9999 7.50012ZM13.4999 5.00012C13.776 5.00012 13.9999 4.77626 13.9999 4.50012C13.9999 4.22398 13.776 4.00012 13.4999 4.00012C13.2237 4.00012 12.9999 4.22398 12.9999 4.50012C12.9999 4.77626 13.2237 5.00012 13.4999 5.00012ZM4.99988 13.5001C4.99988 13.7763 4.77602 14.0001 4.49988 14.0001C4.22374 14.0001 3.99988 13.7763 3.99988 13.5001C3.99988 13.224 4.22374 13.0001 4.49988 13.0001C4.77602 13.0001 4.99988 13.224 4.99988 13.5001ZM7.49988 14.0001C7.77602 14.0001 7.99988 13.7763 7.99988 13.5001C7.99988 13.224 7.77602 13.0001 7.49988 13.0001C7.22374 13.0001 6.99988 13.224 6.99988 13.5001C6.99988 13.7763 7.22374 14.0001 7.49988 14.0001ZM10.9999 13.5001C10.9999 13.7763 10.776 14.0001 10.4999 14.0001C10.2237 14.0001 9.99988 13.7763 9.99988 13.5001C9.99988 13.224 10.2237 13.0001 10.4999 13.0001C10.776 13.0001 10.9999 13.224 10.9999 13.5001ZM13.4999 14.0001C13.776 14.0001 13.9999 13.7763 13.9999 13.5001C13.9999 13.224 13.776 13.0001 13.4999 13.0001C13.2237 13.0001 12.9999 13.224 12.9999 13.5001C12.9999 13.7763 13.2237 14.0001 13.4999 14.0001ZM3.99988 5.00012C3.99988 4.44784 4.44759 4.00012 4.99988 4.00012H9.99988C10.5522 4.00012 10.9999 4.44784 10.9999 5.00012V10.0001C10.9999 10.5524 10.5522 11.0001 9.99988 11.0001H4.99988C4.44759 11.0001 3.99988 10.5524 3.99988 10.0001V5.00012ZM4.99988 5.00012H9.99988V10.0001H4.99988V5.00012Z"
                    fill="#000000"
                  ></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-24 p-1 mb-2.5 shadow-sm"
              >
                <li>
                  <div>
                    <label>X :</label>
                    <input
                      type="number"
                      min={0}
                      value={parseInt(currMarX)}
                      onChange={(e) => changeMargin(e)}
                      className="mar-x w-10 border-1 rounded-sm text-center"
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <label>Y :</label>
                    <input
                      type="number"
                      min={0}
                      value={parseInt(currMarY)}
                      onChange={(e) => changeMargin(e)}
                      className="mar-y w-10 border-1 rounded-sm text-center"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Color */}
          <div className="flex items-center">
            <div className="dropdown dropdown-top">
              <div
                tabIndex={0}
                role="button"
                title="Color"
                className="btn bg-transparent border-none px-0 h-7 shadow-2xl"
              >
                <svg
                  fill="#000000"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 13.998c-.092.065-2 2.083-2 3.5 0 1.494.949 2.448 2 2.5.906.044 2-.891 2-2.5 0-1.5-1.908-3.435-2-3.5zm-16.586-1c0 .534.208 1.036.586 1.414l5.586 5.586c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l7-7-.707-.707L11 4.584 8.707 2.291 7.293 3.705l2.293 2.293L4 11.584c-.378.378-.586.88-.586 1.414zM11 7.412l5.586 5.586L11 18.584h.001l-.001 1v-1l-5.586-5.586L11 7.412z"></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-26 p-0 mb-2.5 shadow-sm"
              >
                <li>
                  {/* Text-Color */}
                  <div className="flex items-center relative gap-2">
                    <label>TX : </label>
                    <input
                      type="color"
                      value={style.color || "#000000"}
                      onChange={(e) => changeTextColor(e.target.value)}
                      className="w-11 h-7 rounded cursor-pointer"
                    />
                  </div>
                </li>
                <li>
                  {/* BG-Color */}
                  <div className="flex items-center gap-2">
                    <label>BG :</label>
                    <input
                      type="color"
                      value={style.backgroundColor || "#000000"}
                      onChange={(e) => changeBGColor(e.target.value)}
                      className="w-11 h-7 rounded cursor-pointer"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Delete Btn */}
          <button
            className="text-red-900 text-sm font-extrabold hover:text-red-500 border-1 rounded-sm cursor-pointer"
            onClick={onDelete}
          >
            <svg
              fill="darkred"
              width="28px"
              height="28px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>

              <g data-name="01" id="_01">
                <path d="M13,20V14a1,1,0,0,1,2,0v6a1,1,0,0,1-2,0Zm5,1a1,1,0,0,0,1-1V14a1,1,0,0,0-2,0v6A1,1,0,0,0,18,21ZM7,10A1,1,0,0,1,8,9h4V7a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1V9h4a1,1,0,0,1,0,2H23V22a4,4,0,0,1-4,4H13a4,4,0,0,1-4-4V11H8A1,1,0,0,1,7,10Zm7-1h4V8H14ZM11,22a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V11H11Z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default StylingPanel;