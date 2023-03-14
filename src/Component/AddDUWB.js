import React, { useState } from 'react'
import { FormContainer, LoginCard, Main } from '../EmotionCss/CommonEmotion'
import { DepartmentMaster } from "./Master/DepartmentMaster"
import { UnitMaster } from "./Master/UnitMaster"
import { WardMaster } from './Master/WardMaster'
import axios from '../Util/axiosinstance.js'
import { BedMaster } from './Master/BedMaster'
import { Toaster } from './Master/Toaster'

export const AddDUWB = () => {
  
  const [selectDept,setSelectDept]=useState(0)

  const [selectUnit,setSelectUnit]=useState(0)

  const [changeDept,setChangeDept]=useState(false)

  const [open, setOpen] = useState(false);

  function upddept(event){
    
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    axios.post("saveDepartment",value)
    .then(()=>setOpen(true))
    //.then(()=>getAllDept())
  }

  function updunit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    axios.post("saveUnit",value)
    .then(()=>setOpen(true))
  } 

  function updward(event){
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    axios.post("saveWard",value)
    .then(()=>setOpen(true))
  }

  function updbed(event){
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    axios.post("saveBed",value)
    .then(()=>setOpen(true))
  }

  return (
    <Main>
      <LoginCard>
        <h2><u>Add Department</u></h2><br/>
        <hr/>
        <FormContainer method={"POST"} onSubmit={upddept}>
          <DepartmentMaster/>  
        </FormContainer>
        <hr/>
        <FormContainer method={"POST"} onSubmit={updunit}>
          <UnitMaster changeDept={changeDept}/>
        </FormContainer>
        <hr/>
        <FormContainer method={"POST"} onSubmit={updward}>
          <WardMaster selectDept={selectDept} setSelectDept={setSelectDept}/>
        </FormContainer>
        <hr/>
        <FormContainer method={"POST"} onSubmit={updbed}>
          <BedMaster selectDept={selectDept} setSelectDept={setSelectDept}
            selectUnit={selectUnit} setSelectUnit={setSelectUnit}/>
        </FormContainer>
      </LoginCard>
      <Toaster open={open} setOpen={setOpen}/>
    </Main>
  )

}
