
import React, { useEffect, useState } from 'react'
import { Opt } from '../../EmotionCss/CommonEmotion'
import axios from '../../Util/axiosinstance.js'

export const DepartmentSelect = (props) => {

    const [depts,setDepts]=useState([])

    const getAllDept=()=>{
        axios.get("getAllDepartment")
        .then((res)=>setDepts(res.data))
        .then(()=>console.log(depts))
    }

    useEffect(()=>{
        getAllDept();
    },[props.changeDept])

  return (
    <>
    <Opt name="deptid" width={"200px"} onChange={(event)=>props.setSelectDept(event.target.value)}>
        <option value="">Select Department</option>
        {
            depts && depts.map(({deptid,deptname})=><option  value={deptid} key={deptid}>{deptname}</option>)
        }
    </Opt>
    </>
  )
}
