import React from "react";

const H1 = ({text = 'Add a Heading', className}) => {
    return (
        <h1 className={className}>{text}</h1>
    )
}

export default H1