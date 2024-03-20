import React from 'react'

function Container({children}) {
  return (
    <div>
      <div style={{display:"flex", gap:"10px", margin:"auto", width:"80%", justifyContent:"space-around"}}>

      {children}
      </div>
    </div>
  )
}

export default Container
