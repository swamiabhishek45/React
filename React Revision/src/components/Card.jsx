import React from 'react'

function Card(props) {
  return (
    <div className=' flex px-6 py-4 bg-white rounded shadow'>

    <div className=' p-6 border-2 border-red-400 w-96 h-56 rounded-lg shadow-md'>
      <h1 className='text-3xl mb-4 font-bold'>{props.title}</h1>
      <p>{props.des}</p>
    </div>
    </div>
  );
}

export default Card
