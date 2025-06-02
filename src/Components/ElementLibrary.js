import { MediaElements } from "./media/MediaElements"
import { TextElements } from "./text/TextElements"
import { FormElements } from "./forms/FormElements"
import { buttons } from "./Button/buttonElements"
import { LayoutElements } from "./Layout/LayoutElements"

export const ElementLibrary = {
    text: TextElements,
    media: MediaElements,
    forms: FormElements,
    buttons:buttons,
    layout:LayoutElements,
    
}

export const elementMap = Object.fromEntries(
    Object.values(ElementLibrary).flatMap(el => el.map(item => [item.id, item]))
)

