import React from "react"
import video from "./baking-muffins.mp4"

const Video = () => {
  return (
    <>
      <div className='video'>
        <video autoPlay={true} muted loop id='myVideo' style={{ width: "100%" }}>
          <source src={video} type='video/mp4' />
        </video>
      </div>
    </>
  )
}

export default Video
