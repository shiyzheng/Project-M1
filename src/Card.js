import React, { useState } from 'react'

const Card = ({ id }) => {
  const [faceUp, setFaceUp] = useState(false)
  const [matched, setMatched] = useState(false)
  const images = ["https://i.imgur.com/zEQsv1b.png", "https://i.imgur.com/S4QlJRt.png", "https://i.imgur.com/c3JpYEZ.png", 
    "https://i.imgur.com/rTFbvUQ.png", "https://i.imgur.com/WZ8w7qU.png", "https://i.imgur.com/d6IwaVK.png"]
  const faceDown = "https://i.imgur.com/kJIGOpy.jpg"



  return (
    <>
      {(faceUp || matched)
        && (
        <>
          <input type="image" src={images[id % 6]} width="200" onClick={() => setFaceUp(!faceUp)}/>
        </>
      )}

      {!faceUp
        && (
        <>
          <input type="image" src={faceDown} width="200" onClick={() => setFaceUp(!faceUp)}/>
        </>
      )}
    </>
  )
}

export default Card