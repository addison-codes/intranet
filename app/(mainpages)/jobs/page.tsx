'use client'

import React from 'react'

const jobs = () => {
  return (
    <div>
      {/* <script id="gnewtonjs" type="text/javascript" src="https://recruitingbypaycor.com/career/iframe.action?clientId=8a7883d0879c591b0187e3570b4e28cc" /> */}
<iframe
  id="gnewtonIframe"
  style={{ overflow: "scroll", height: 4000 }}
  src="https://recruitingbypaycor.com/career/internalIframe.action?internal=true&clientId=8a7883d0879c591b0187e3570b4e28cc&key=99611f096869b09151d9febaf25cd856"
  width="100%"
  height="100%"
  frameBorder={0}
  scrolling="yes"
/>
{/* <script id="gnewtonjs" type="text/javascript" src="https://recruitingbypaycor.com/career/internalIframe.action?internal=true&clientId=8a7883d0879c591b0187e3570b4e28cc&key=99611f096869b09151d9febaf25cd856"></script> */}
    </div>
  )
}

export default jobs
