import React from "react"

const DisplayCell = ({ image, title, subtitle }) => {
  // TODO: fetch this from GraphQL
  const imageName = require("../../content/assets/" + image)
  return (
    <div className="displayCellContainer">
      <div>
        <img src={imageName} />
      </div>
      <div className="displayCellHeader">{title}</div>
      <div className="displayCellSubtitle">{subtitle}</div>
    </div>
  )
}

export default DisplayCell
