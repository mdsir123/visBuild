import React from "react";

const H2 = ({text = 'Add a subheading', className}) => {
    return (
        <h2 className={className}>{text}</h2>
    )
}

export default H2