import React from 'react'

function Bubble(props) {
  return (
    <div>
        <h1 className='w-auto' style={{backgroundColor: props.color}}>{props.name}</h1>
    </div>
  )
}

export default Bubble
