import React from 'react'

const SeeCartBtn = (props) => {
  return (
    <div className='d-flex justify-content-center p-5'>
    <button onClick={props.onClick} className='btn btn-secondary text-warning'>
   See the Cart
    </button>
    </div>
  )
}

export default SeeCartBtn