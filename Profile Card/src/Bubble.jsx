import React from 'react'

function Bubble(props) {
  return (
    <div className=''>
        <h1 className='mt-2 w-auto px-2 font-bold rounded-md' style={{backgroundColor: props.color}}>{props.name}</h1>
    </div>
  )
}

export default Bubble
