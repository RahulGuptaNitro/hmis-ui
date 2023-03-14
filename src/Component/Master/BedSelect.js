import React, { useEffect, useState } from 'react'
import { Opt } from '../../EmotionCss/CommonEmotion'
import axios from '../../Util/axiosinstance.js'

export const BedSelect = (props) => {
    const [beds,setBeds]=useState([])

    const getBedByWardId=()=>{
        axios.get("getBedByWardId/"+props.selectWard)
        .then((res)=>setBeds(res.data))
    }

    useEffect(()=>{
        getBedByWardId();
    },[props.selectWard])

  return (
    <>
    <Opt name="bedid" width={"200px"} >
        <option value="">Select Bed</option>
        {
            beds && beds.map(({bedid,bedname})=><option  value={bedid} key={bedid}>{bedname}</option>)
        }
    </Opt>
    </>
  )

}
