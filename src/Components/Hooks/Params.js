import React from 'react'
import {useParams} from "react-router-dom"

const Params = () => {
    const {name}=useParams();
  return (
    <div>
        <h1>user:{name}</h1>
    </div>
  )
}

export default Params