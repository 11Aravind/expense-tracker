import React from 'react'

export default function Card({headding,color,type}) {
  return (
  <>
  <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{headding}</h5>
    <h6 className="card-subtitle mb-2 " style={{"color": `${color}`}}>₹{type}</h6>
  </div>
</div>
  </>
  )
}
