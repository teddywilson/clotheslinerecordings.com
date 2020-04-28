import React from "react"

const DisplayCell = ({ image, title, subtitle }) => {
  const imageName = require('../../content/assets/' + image)
  return (
    <div style={{
      margin: 24,
      borderWidth: 4,
      maxWidth: 500,
      backgroundColor: "red",
    }}>
      <img
        src={imageName}
        style={{
          width: '100%',
          padding: 0,
          margin: 0,
        }}/>
      <div style={{
        backgroundColor: "white",
        margin: 0,
        padding: 0
      }}>
        <h1>
          {title}
        </h1>
        <h2>
          {subtitle}
        </h2>
      </div>
    </div>
  )
}

export default DisplayCell