import React from 'react'
import { ThreeCircles } from  'react-loader-spinner'

function Loading({loading}) {
  return (
    <ThreeCircles
  height="150"
  width="150"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={loading}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
  )
}

export default Loading