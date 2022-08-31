import React from 'react'

// @ts-ignore
const CardItem = ({ style, url }) => {
  return (
    <div
      style={{
        width: 375,
        height: 208,
        background: '#000',
        color: '#fff',
        borderRadius: 5,
        textAlign: 'center',
        ...style
      }}
    >
      <img src={url} width="100%" height="100%" />
    </div>
  )
}
export default CardItem
