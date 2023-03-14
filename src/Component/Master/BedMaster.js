import React from 'react'
import { Button, Input } from '../../EmotionCss/CommonEmotion'
import { DepartmentSelect } from './DepartmentSelect'
import { UnitSelect } from './UnitSelect'
import { WardSelect } from './WardSelect'

export const BedMaster = (props) => {
  return (
    <>
        <DepartmentSelect setSelectDept={props.setSelectDept}/>
        <UnitSelect selectDept={props.selectDept} setSelectUnit={props.setSelectUnit}/>
        <WardSelect selectUnit={props.selectUnit}/>
        <Input type="text" name="bedcount" placeholder='Enter Bed Count' width={"200px"} />
        <Button width={"250px"} >Add Beds</Button>
    </>
  )
}
