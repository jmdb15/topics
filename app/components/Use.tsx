'use client'

import React from 'react'
import { useParams } from 'next/navigation'

const Use = () => {
  const params = useParams()
  console.log(params);
  
  return (
    <div>Use {params.id}</div>
  )
}

export default Use