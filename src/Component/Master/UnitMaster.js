import React from 'react'
import axios from '../../Util/axiosinstance.js'
import { Button, FormContainer, FormRow, Input, Label } from '../../EmotionCss/CommonEmotion'
import { DepartmentSelect } from './DepartmentSelect';

export const UnitMaster = (props) => {


  return (
    <>
        <DepartmentSelect changeDept={props.changeDept}/>
        <br/>
        <Input width={"200px"} type="text" name="unitname" placeholder='Enter Unit Name'/>
        <Button width={"250px"}>Add Unit</Button>
    </>
  )
}
