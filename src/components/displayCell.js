import React from "react"

const DisplayCell = ({ title, subtitle }) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      margin: 24,
      padding: 16,
      borderWidth: 4,
      borderColor: 'white',
      borderStyle: 'dotted',
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