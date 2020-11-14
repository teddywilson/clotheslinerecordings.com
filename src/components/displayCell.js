import React from "react"

const DisplayCell = ({ image, index, title, subtitle, onClickListener }) => {
  // TODO(teddywilson) Fetch this from GraphQL/optimize
  const imageHidden = image === undefined
  const imageName =
    image !== undefined ? require("../../content/assets/" + image) : ""
  return (
    <div
      className="displayCellContainer"
      role="gridcell"
      tabIndex={index}
      onClick={onClickListener}
      onKeyDown={onClickListener}
    >
      <div>
        <img
          src={imageName}
          alt=""
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
