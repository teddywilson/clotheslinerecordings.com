import React from "react"

import GridList from '@material-ui/core/GridList';

const DisplayGridList = ({ children }) => {
  return (
    <div>
      <GridList cellHeight="auto" cols={3}>
        {children}
      </GridList>
    </div>
  )
}

export default DisplayGridList