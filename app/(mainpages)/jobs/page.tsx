'use client'

import React from 'react'

const jobs = () => {
  return (
    <div>
      {/* <script id="gnewtonjs" type="text/javascript" src="https://recruitingbypaycor.com/career/iframe.action?clientId=8a7883d0879c591b0187e3570b4e28cc" /> */}
<iframe
  id="gnewtonIframe"
  // style={{ overflow: "scroll", height: 6000 }}
  src="https://recruitingbypaycor.com/career/CareerHome.action?clientId=8a7883d0879c591b0187e3570b4e28cc"
  width="100%"
  height="100%"
  frameBorder={0}
  scrolling="yes"
/>
    </div>
  )
}

export default jobs
