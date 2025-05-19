import H1 from "./H1";
import H2 from "./H2";
import P from "./P";

export const TextElements = [
    {
        id: 'h1',
        label: 'Heading 1',
        type: 'text',
        component: H1,
        defaultProps: {text:'Add a heading', className:"text-3xl font-bold"},
        preview: <h1 className="text-3xl font-bold">Add a heading</h1>
    },
    {
        id: 'h2',
        label: 'Heading 2',
        type: 'text',
        component: H2,
        defaultProps: {text:'Add a heading', className:"text-lg font-bold"},
        preview: <h2 className="text-lg font-bold">Add a heading</h2>
    },
    {
        id: 'p',
        label: 'Paragraph',
        type: 'text',
        component: P,
        defaultProps: {text:'Add a paragraph', className:"text-xl"},
        preview: <p className="text-xl">Add a paragraph</p>
    },
]

