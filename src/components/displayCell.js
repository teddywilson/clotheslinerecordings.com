import React from "react"

const DisplayCell = ({ image, title, subtitle, onClickListener }) => {
  // TODO: fetch this from GraphQL
  const imageHidden = image === undefined
  const imageName =
    image !== undefined ? require("../../content/assets/" + image) : ""
  return (
    <div className="displayCellContainer" onClick={onClickListener}>
      <div>
        <img
          src={imageName}
          style={{
            width: "100%",
            maxWidth: 500,
            hidden: { imageHidden },
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
