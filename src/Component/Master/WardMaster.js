import React from 'react'
import { Button, Input } from '../../EmotionCss/CommonEmotion'
import { UnitSelect } from './UnitSelect'
import { DepartmentSelect } from './DepartmentSelect'

export const WardMaster = (props) => {

  return (
    <>
      <DepartmentSelect setSelectDept={props.setSelectDept}/>
      <UnitSelect selectDept={props.selectDept} />
      <Input type="text" name="wardname" placeholder='Enter Ward Name' width={"200px"} />
      <Button width={"250px"} >Add Ward</Button>
    </>
  )
}
