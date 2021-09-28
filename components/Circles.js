import * as React from "react"

function Circles(props) {
  return (
    <svg
      fill="none"
      width={270}
      height={531}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={24.5} cy={285.5} r={245} stroke="#06433C" />
      <circle cx={-15.5} cy={245.5} r={245} stroke="#CB912C" />
    </svg>
  )
}

export default Circles