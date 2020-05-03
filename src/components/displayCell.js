import React from "react"

const DisplayCell = ({ image, title, subtitle }) => {
  // TODO: fetch this from GraphQL
  const imageName = require("../../content/assets/" + image)
  return (
    <div
      style={{
        padding: "8%"
      }}
    >
      <div>
        <img src={imageName} />
      </div>
    </div>
  )
}

export default DisplayCell
