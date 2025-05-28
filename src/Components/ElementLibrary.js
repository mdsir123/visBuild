import { MediaElements } from "./media/MediaElements"
import { TextElements } from "./text/TextElements"

export const ElementLibrary = {
    text: TextElements,
    media: MediaElements,
    
}

export const elementMap = Object.fromEntries(
    Object.values(ElementLibrary).flatMap(el => el.map(item => [item.id, item]))
)

// console.log(Object.keys(elementMap)) // For debugging purposes, you can remove this later
