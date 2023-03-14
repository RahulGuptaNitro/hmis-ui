import React, { useEffect, useState } from 'react'
import { Opt } from '../../EmotionCss/CommonEmotion'
import axios from '../../Util/axiosinstance.js'

export const WardSelect = (props) => {

    const [wards,setWards]=useState([])

    const getWardByUnitId=()=>{
        axios.get("getWardByUnitId/"+props.selectUnit)
        .then((res)=>setWards(res.data))
    }
    
    useEffect(()=>{
        getWardByUnitId();
    },[props.selectUnit])

  return (
    <>
    <Opt name="wardid" width={"200px"} onChange={(event)=>props.setSelectWard(event.target.value)}>
        <option value="">Select Ward</option>
        {
            wards && wards.map(({wardid,wardname})=><option  value={wardid} key={wardid}>{wardname}</option>)
        }
    </Opt>
    </>
  )
}
