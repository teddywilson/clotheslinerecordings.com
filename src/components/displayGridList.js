import React from "react"

import GridList from "@material-ui/core/GridList"

const DisplayGridList = ({ children }) => {
  return (
    <div>
      <GridList
        cellHeight="auto"
        cols={1}
        style={{
          margin: 0,
          padding: 0,
          marginBottom: 32
        }}
      >
        {children}
      </GridList>
    </div>
  )
}

export default DisplayGridList
