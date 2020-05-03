import React from "react"

const DisplayCell = ({ image, title, subtitle }) => {
  // TODO: fetch this from GraphQL
  const imageName = require("../../content/assets/" + image)
  return (
    <div
      style={{
        paddingLeft: "24%",
        paddingTop: "2%",
        paddingRight: "24%",
        paddingBottom: "2%"
      }}
    >
      <div>
        <img src={imageName} />
      </div>
    </div>
  )
}

export default DisplayCell
