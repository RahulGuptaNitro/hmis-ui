import styled from '@emotion/styled'

const color={
    "color-white":"white",
    "color-black":"black",
    "color-red":"red"
}


export const Button = styled.button`
  background: transparent;
  width: 150px;
  position: relative;
  padding: 15px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 500ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  border-radius: 5px;
  font-weight: 600;
  overflow: hidden;
  border: 2px solid #1ECD97;
  text-decoration: none;
  font-size: 17px;
  color: ${p => p.color?p.color:"black"};
  margin: 25px;
  &:hover {color: #1ECD97;}
  `

export const Input = styled.input`
width: 50%;
-webkit-appearance: none;
outline: none;
display: block;
font-size: 16px;
font-family: inherit;
padding: 8px 16px 8px 16px;
border-radius: 6px;
border: 1px solid grey;
background: var(#fff);
transition: border-color .3s, box-shadow .3s;
&::placeholder {
    color: var(#BBC1E1);
}
`

export const Opt = styled.select`
width: 58%;
outline: none;
font-size: 16px;
font-family: inherit;
border: 1px solid var(grey);
padding: 8px 16px 8px 16px;
border-radius: 6px;
transition: border-color .3s, box-shadow .3s;
&::placeholder {
    color: var(#BBC1E1);
};
`


export const Main = styled.div`
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: wheat;
    `

export const Label = styled.label`
    font-size: 16px;
    font-family: inherit;
    font-weight: bold;
    `

export const LoginCard = styled.div`
    width: 1080px;
    box-shadow: 10px 10px 10px 0px grey;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    background: white;
    `

export const FormRow = styled.div`
    width: 44%;
    gap: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    `

export const FormContainer = styled.form`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5%;
    margin-inline: auto;
    `

export const Divcard=styled.div`
    width: 300px;
    height: 150px;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    `