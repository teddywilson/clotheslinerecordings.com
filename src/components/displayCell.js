import React from "react"

const DisplayCell = ({ image, title, subtitle, onClickListener }) => {
  // TODO: fetch this from GraphQL
  const imageName = require("../../content/assets/" + image)
  return (
    <div className="displayCellContainer" onClick={onClickListener}>
      <div>
        <img
          src={imageName}
          style={{
            width: "100%"
          }}
        />
      </div>
      <div className="displayCellTextContainer">
        <div className="displayCellHeader">{title}</div>
        <div className="displayCellSubtitle">{subtitle}</div>
      </div>
    </div>
  )
}

export default DisplayCell
