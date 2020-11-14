import React from "react"

import Img from "gatsby-image"

const MAX_IMAGE_WIDTH = 500

const DisplayCell = ({ imageFluid, title, subtitle, url }) => {
  const imageHidden = imageFluid === undefined
  const onClickListener = () => {
    window.open(url, "_blank")
  }
  return (
    <div
      className="displayCellContainer"
      role="gridcell"
      onClick={onClickListener}
      onKeyDown={onClickListener}
    >
      <div>
        <Img
          fluid={imageFluid}
          style={{
            maxWidth: MAX_IMAGE_WIDTH,
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
