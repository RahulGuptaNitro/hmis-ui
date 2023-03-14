import React, { useEffect, useState } from 'react'
import axios from '../Util/axiosinstance.js'
import { useLocation } from 'react-router-dom'
import { Button, FormContainer, FormRow, Label, LoginCard, Main, } from '../EmotionCss/CommonEmotion'
import { BedSelect } from './Master/BedSelect'
import { DepartmentSelect } from './Master/DepartmentSelect'
import { UnitSelect } from './Master/UnitSelect'
import { WardSelect } from './Master/WardSelect'
import { Toaster } from './Master/Toaster'

export default function WardDetails() {

  const location= useLocation()

  const [selectDept,setSelectDept]=useState(0)

  const [selectUnit,setSelectUnit]=useState(0)

  const [selectWard,setSelectWard]=useState(0)

  const [open, setOpen] = useState(false);

  const pat=location.state

  const head=[
    'HID :',
    'First Name :',
    'Middle Name :',
    'Last Name :',
    'Gender :',
    'Email :',
    'DOB :',
    "Father's Name :",
    "Mother's Name :",
    'Phone :',
    'Address :',
    'City :',
    'State :',
    'Country :',
    'Pincode :',
    'Caste :',
    'Department :',
    'Insured :',
    'Admission Details :'
  ]

  useEffect(()=>{
    setSelectUnit(0)
    setSelectWard(0)
  },[selectDept])

  function admit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    value["hid"]=pat[0];
    axios.post("saveAdmission",value)
    .then(()=> setOpen(true))
  }

  return (
    <>
    <Main>
      <LoginCard>
        <h2><u>Patient Details</u></h2><br/>
        <FormContainer onSubmit={admit}>
          {pat && Object.entries(pat).map((key,i)=>i!=16 && <FormRow key={key[0]}>
            <Label>{head[key[0]]}</Label>
            <Label>{key[1]}</Label>
            </FormRow>)}
            <FormRow/><FormRow/>
            {pat[18]=="OPD" && <>
            <DepartmentSelect setSelectDept={setSelectDept}/>
            <UnitSelect selectDept={selectDept} setSelectUnit={setSelectUnit}/>
            <WardSelect selectUnit={selectUnit} setSelectWard={setSelectWard}/>
            <BedSelect selectWard={selectWard}/>
          <FormRow/><FormRow/>
          <Button type="submit">Admit</Button></>}
        </FormContainer>
      </LoginCard>
      <Toaster open={open} setOpen={setOpen}/>
    </Main>
    </>
  )
}
