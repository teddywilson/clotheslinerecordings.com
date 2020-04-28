import React from "react"

const DisplayCell = ({ title, subtitle }) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row"
    }}>
        <div>
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