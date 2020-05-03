import React from "react"

const DisplayCell = ({ image, title, subtitle }) => {
  // TODO: fetch this from GraphQL
  const imageName = require("../../content/assets/" + image)
  return (
    <div
      style={{
        marginLeft: "8%",
        backgroundColor: "white",
        paddingBottom: "8px"
      }}
    >
      <div>
        <img
          src={imageName}
          style={{
            margin: 0,
            bottom: 0
          }}
        />
        <div
          style={{
            margin: 0
          }}
        >
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
    </div>
  )
}

export default DisplayCell
