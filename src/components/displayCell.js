import React from "react"

const DisplayCell = ({ image, title, subtitle }) => {
  // TODO: fetch this from GraphQL
  const imageName = require("../../content/assets/" + image)
  return (
    <div
      style={{
        paddingLeft: "16%",
        paddingTop: "4%",
        paddingRight: "16%",
        paddingBottom: "4%"
      }}
    >
      <div>
        <img src={imageName} />
      </div>
    </div>
  )
}

export default DisplayCell
