import { ThemeContext } from '../App'
import React, { useContext } from 'react'
import { Button, FormContainer, FormRow, Input, Label, Main } from '../EmotionCss/CommonEmotion'

export default function Admission() {

  const theme= useContext(ThemeContext)

  return (
    <>
      <Main>
        <FormContainer>
        <FormRow>
        <Label></Label>
        <Input type="text" name="hid" placeholder='Enter HID'/>
        </FormRow>
        <FormRow>
        <Button width={"inherit"}>Fetch User</Button>
        </FormRow>
        </FormContainer>
      </Main>
    </>
  )
}
