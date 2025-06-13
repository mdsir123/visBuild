const TextPanel = ({ element, onClose, styleIdx, setStyleIdx, onUpdate }) => {
  const { style } = element;

  const toggleBold = () => {
    const newStyle = {
      ...style,
      fontWeight: style.fontWeight === 'bold' ? 'normal' : 'bold',
    };
    onUpdate(newStyle);
  };

  const fontItalic = () => {
    const newStyle = {
      ...style,
      fontStyle: style.fontStyle === 'italic' ? 'normal' : 'italic',
    };
    onUpdate(newStyle); 
  };

  const toggleUnderline = () => {
    const newStyle = {
      ...style,
      textDecoration: style.textDecoration === 'underline' ? 'none' : 'underline',
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
  const changeBorderWidth = (e) => {
    const newStyle = {
      ...style,
      borderWidth : e.target.value,
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

  return (
    <>
      {styleIdx === element.id && (
        <div className="bg-white shadow-lg border rounded-lg p-3 min-w-max">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-700">Text Styling</h3>
            <button 
              className="text-red-500 text-sm hover:text-red-700 px-2 py-1"
              onClick={onClose}
            >
              ✕
            </button>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            {/* Font Style Buttons */}
            <div className="flex border rounded">
              <button
                className={`px-3 py-1 text-sm font-bold border-r ${
                  style.fontWeight === 'bold' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={toggleBold}
              >
                B
              </button>
              <button
                className={`px-3 py-1 text-sm italic border-r ${
                  style.fontStyle === 'italic' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={fontItalic}
              >
                I
              </button>
              <button
                className={`px-3 py-1 text-sm underline ${
                  style.textDecoration === 'underline' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={toggleUnderline}
              >
                U
              </button>
            </div>

            {/* Font Family */}
            <select
              className="border rounded px-2 py-1 text-sm"
              onChange={changeFontFamily}
              value={style.fontFamily || 'Arial, sans-serif'}
            >
              <option value="Arial, sans-serif">Arial</option>
              <option value="Georgia, serif">Georgia</option>
              <option value="'Courier New', monospace">Courier</option>
              <option value="'Times New Roman', serif">Times</option>
              <option value="Helvetica, sans-serif">Helvetica</option>
            </select>

            {/* Font Size */}
            <select
              className="border rounded px-2 py-1 text-sm"
              onChange={changeFontSize}
              value={style.fontSize || '16px'}
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

            {/* Border */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Border:</label>
              <select
              className="border rounded px-2 py-1 text-sm"
              onChange={changeBorderWidth}
              value={style.borderWidth || '2px'}
            >
              <option value="0px">none</option>
              <option value="1px">1px</option>
              <option value="2px">2px</option>
              <option value="4px">4px</option>
              <option value="6px">6px</option>
            </select>
            </div>

            {/* Color Picker */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Color:</label>
              <input
                type="color"
                value={style.color || '#000000'}
                onChange={(e) => changeTextColor(e.target.value)}
                className="w-10 h-8 border rounded cursor-pointer"
                title="Select text color"
              />
            </div>

            
          </div>
        </div>
      )}
    </>
  );
};

export default TextPanel;
