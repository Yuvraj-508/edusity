import React from 'react'
import './Title.css'
function Title({subTitle,title}) {
  return (
    <div className=' tittle '>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
