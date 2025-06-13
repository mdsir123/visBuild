import { createContext, useState } from "react";

export const CanvasElementStore = createContext(null)

const CanvasElementController = ({children}) => {
    const [canvasElements, setCanvasElements] = useState([])

    return(
        <CanvasElementStore.Provider value={{canvasElements,setCanvasElements}}>
            {children}
        </CanvasElementStore.Provider>
    )
}

export default CanvasElementController