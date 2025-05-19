import React from "react";

const P = ({text = 'Add a paragraph', className}) => {
    return (
        <p className={className}>{text}</p>
    )
}

export default P 