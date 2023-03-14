import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Sidediv } from '../EmotionCss/CommonEmotion'
import { pageslist } from './Pages'

export default function Sidebar(props) {
  const navigate=useNavigate()
  return (
    <div>
        <Sidediv width={"50vh"} height={"100vh"} >
          {
            pageslist.map(({name,url})=>
              <Button bgcolor={"#1ECD97"} hoverColor={"white"} onClick={()=>{navigate(url);props.setShow(false)}}>{name}</Button>
            )
          }
        </Sidediv>
    </div>
  )
}
