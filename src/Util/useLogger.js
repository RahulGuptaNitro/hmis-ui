import React, { useEffect, useState } from 'react'

export const useLogger = (val) => {

  const [a,setA]=useState(val)

  useEffect(()=>{
    console.log(a)
  },[a])

  return [a,setA]

}
