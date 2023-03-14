import React from 'react'
import { Button, FormContainer, FormRow, Input, Label } from '../../EmotionCss/CommonEmotion'
import axios from '../../Util/axiosinstance.js'

export const DepartmentMaster = () => {


  return (
    <>
        <Input type="text" name="deptname" placeholder='Enter Department Name' width={"200px"} />
        <Button width={"250px"} >Add Department</Button>
    </>
  )
}
