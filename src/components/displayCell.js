import React from "react"

const DisplayCell = ({ image, title, subtitle }) => {
  const imageName = require('../../content/assets/' + image)
  return (
    <div style={{
      margin: 24,
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: 430,
        backgroundColor: "red",
      }}>
        <div class="thumbnail">
          <img
            src={imageName}
            style={{
              width: '100%',
              padding: 0,
              margin: 0,
              overflow: 'hidden'
            }}/>
        </div>
        <div style={{
          backgroundColor: 'white',
          margin: 0,
          padding: 8
        }}>
          <h1>
            {title}
          </h1>
          <h2>
            {subtitle}]
          </h2>
      </div>  
      </div>
    </div>
  )
}

export default DisplayCell