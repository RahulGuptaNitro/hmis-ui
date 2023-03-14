import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
import { Button, FormContainer, FormRow, Input, Label, Main,Navbutton } from '../EmotionCss/CommonEmotion'
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../ReduxStore/patientdata';
import axios from "../Util/axiosinstance.js";

export default function Dashboard() {
  

  const dispatch=useDispatch()

  const patientData=useSelector(state=>state.pat.patient)

  const navigate =useNavigate()

  const columns = [{name:"hid",label:"HID"},
    {name:"fname",label:"First Name"}, 
    {name:"mname",label:"Middle Name", options:{display:false,filter:false}},
    {name:"lname",label:"Last Name"},
    {name:"gender",label:"Gender"},  
    {name:"email",label:"Email"},
    {name:"dob",label:"DOB", options:{display:false,filter:false}},
    {name:"father_name",label:"Father's Name", options:{display:false,filter:false}}, 
    {name:"mother_name",label:"Mother's Name", options:{display:false,filter:false}},
    {name:"phone",label:"Phone", options:{display:false,filter:false}},
    {name:"address",label:"Address", options:{display:false,filter:false}},
    {name:"city",label:"City", options:{display:false,filter:false}},
    {name:"state",label:"State", options:{display:false,filter:false}},
    {name:"country",label:"Country", options:{display:false}},
    {name:"pincode",label:"Pincode", options:{display:false,filter:false}},
    {name:"caste",label:"Caste", options:{display:false}},
    {name:"department",label:"Department", options:{display:false}},
    {name:"insured",label:"Insured", options:{display:false}},
    {name:"patStatus",label:"Admission Details"},
    {name:"isvalid",label:"Active", options:{display:false,filter:false}},
    {name:"_id", label: "Actions", options: {
      customBodyRender: (value, tableMeta, updateValue) => 
        <Navbutton onClick={() => navigate("/wards",{state:tableMeta.rowData})}>+</Navbutton>
        ,filter:false}}];

  const options = {
    filterType: 'checkbox',
    selectableRows: false
  };  

  useEffect(()=>{
    axios.get("getAllPatient")
    .then((res)=> dispatch(addData(res.data)))
  },[])  


  return (
    <>
      <Main>
        <MUIDataTable 
          title={"Patient List"}
          data={patientData}
          columns={columns}
          options={options}
        />
      </Main>
    </>
  )
}
