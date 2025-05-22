import React from 'react'

const Text = (props) => {
  const Tag = props.tag;
  return (
    <Tag className={props.className} contentEditable={true} >{props.text}</Tag>
  )
}

export default Text