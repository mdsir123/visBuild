import { MediaElements } from "./media/MediaElements"
import { TextElements } from "./text/TextElements"
import { FormElements } from "./forms/FormElements"

export const ElementLibrary = {
    text: TextElements,
    media: MediaElements,
    forms: FormElements,
    
}

export const elementMap = Object.fromEntries(
    Object.values(ElementLibrary).flatMap(el => el.map(item => [item.id, item]))
)

