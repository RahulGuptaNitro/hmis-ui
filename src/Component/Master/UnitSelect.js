import React, { useEffect, useState } from 'react'
import { Opt } from '../../EmotionCss/CommonEmotion'
import axios from '../../Util/axiosinstance.js'

export const UnitSelect = (props) => {

    const [units,setUnits]=useState([])

    const getUnitByDeptId=()=>{
        axios.get("getUnitByDeptid/"+props.selectDept)
        .then((res)=>setUnits(res.data))
    }

    useEffect(()=>{
        getUnitByDeptId();
    },[props.selectDept])

  return (
    <>
    <Opt name="unitid" width={"200px"}  onChange={(event)=>props.setSelectUnit(event.target.value)}>
        <option value="">Select Unit</option>
        {
            units && units.map(({unitid,unitname})=><option  value={unitid} key={unitid}>{unitname}</option>)
        }
    </Opt>
    </>
  )
}
