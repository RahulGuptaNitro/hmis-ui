import styled from '@emotion/styled'


export const Button = styled.button`
  background: ${p => p.bgcolor?p.bgcolor:"transparent"};
  width: ${p => p.width?p.width:"160px"};
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
  font-size: ${p => p.fontSize?p.fontSize:"17px"};
  color: ${p => p.color?p.color:"black"};
  margin: 25px;
  &:hover {color: ${p => p.hoverColor?p.hoverColor:"#1ECD97"};
    font-size: ${p => p.hoverSize?p.hoverSize:"17px"};
    padding: ${p => p.hoverPadding?p.hoverPadding:"15px"};}
  `

export const Input = styled.input`
width: ${p=>p.width?p.width:"50%"};
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
width: ${p=>p.width?p.width:"58%"};
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
    padding-top: 75px;
    padding-bottom: 25px;
    `

export const Label = styled.label`
    font-size: 16px;
    font-family: inherit;
    font-weight: bold;
    `

export const LoginCard = styled.div`
    width: 1080px;
    box-shadow: 5px 5px 5px 0px grey;
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
    box-shadow: 5px 5px 5px 0px grey;
    `

export const Navbar=styled.div`
    width:100%;
    height:25px;
    position: fixed;
    background: white;
    padding: 10px;
    box-shadow: 0px 10px 10px 0px grey;
    display: flex;
    align-items: center;
    z-index: 1;
    `

export const Navlogo=styled.div`
    position: absolute;
    margin-left: 100px;
    font-family: inherit;
    font-weight: bold;
    font-size: 20px;
    font-style: italic;
    `
    
export const Navbutton=styled.button`
    background: transparent;
    
    margin-left: 30px;
    width: auto;
    padding: ${p => p.padding?p.padding:"5px 10px 2px 10px"};
    cursor: pointer;
    text-align: center;
    transition: all 500ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
    border-radius: 5px;
    font-weight: 600;
    overflow: hidden;
    border: 2px solid #1ECD97;
    font-size: ${p => p.fontSize?p.fontSize:"19px"};
    color: ${p => p.color?p.color:"black"};
    &:hover {color: #1ECD97;}
`


export const Sidediv= styled.div`
    height:${p=>p.height?p.height:"100%"};
    width: ${p=>p.width?p.width:"100%"};
    background: ${p=>p.background?p.background:"white"};
    border: ${p=>p.border?p.border:"none"};
    display: ${p=>p.display?p.display:"block"};
    position: ${p=>p.position?p.position:"fixed"};
    margin-top: 45px;
    z-index: 1;
    box-shadow: 0px 15px 10px 5px grey;
`

export const Bgimg= styled.img`
    height: 85vh;
    width: 85vw;
    border-radius: 25px;
    box-shadow: 10px 10px 15px 5px grey;
`