import React from 'react'
import { useParams } from 'react-router-dom'

function SingleStudent() {
    const {name}=useParams();
    console.log(name)
  return (
    <div>SingleStudent</div>
  )
}

export default SingleStudent