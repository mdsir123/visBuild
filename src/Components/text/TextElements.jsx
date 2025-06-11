import Text from "./Text";

export const TextElements = [
    {
        id: 'h1',   
        label: 'Heading 1',
        type: 'text',
        component: Text,
        defaultProps: {tag:'h1', text:'Add a heading', className:"text-3xl font-bold"},
        preview: <h1 className="text-3xl font-bold">Add a heading</h1>,
        isContainer: false,
        children: []
    },
    {
        id: 'h2',
        label: 'Heading 2',
        type: 'text',
        component: Text,
        defaultProps: {tag:"h2", text:'Add a subheading', className:"text-lg font-bold"},
        preview: <h2 className="text-lg font-bold">Add a subheading</h2>,
        isContainer: false,
        children: []
    },
    {
        id: 'p',
        label: 'Paragraph',
        type: 'text',
        component: Text,
        defaultProps: {tag:"p",text:'Add a paragraph', className:"text-xl"},
        preview: <p className="text-xl">Add a paragraph</p>,
        isContainer: false,
        children: []
    },
]

