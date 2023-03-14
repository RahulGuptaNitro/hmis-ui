/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Button,FormContainer,FormRow,Input, LoginCard, Main, Label, Opt } from '../EmotionCss/CommonEmotion'
import { countries } from '../Util/countrylist';
import { states } from '../Util/statelist';
import { depts } from '../Util/departmentlist'
import { Toaster } from './Master/Toaster';

export default function Reg() {

  const [country,setCountry]=useState("")

  const [open, setOpen] = useState(false);

  function upd(event){
      event.preventDefault();
      const data = new FormData(event.target);
      const value = Object.fromEntries(data.entries());
      const ageinmili=new Date()-new Date(value.dob)
      console.log(parseInt(ageinmili/(365*24*60*60*1000)))
      fetch("http://localhost:8080/savePatient",{method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value)})
      .then(setOpen(true))
  }

  return (
    <>
      <Main>
        <LoginCard>
        <h2><u>Registration</u></h2><br/>
        <FormContainer method={"POST"} onSubmit={upd}>
            <FormRow>
            <Label>First Name: </Label>
            <Input type="text" name="fname"/>
            </FormRow>
            <FormRow>
            <Label>Middle Name: </Label>
            <Input type="text" name="mname"/>
            </FormRow>
            <FormRow>
            <Label>Last Name: </Label>
            <Input type="text" name="lname"/>
            </FormRow>
            <FormRow>
            <Label>DOB: </Label>
            <Input type="date" name="dob"/>
            </FormRow>
            <FormRow>
            <Label>Gender: </Label>
            <Opt name="gender">
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
            </Opt>
            </FormRow>
            <FormRow>
            <Label>Marital Status: </Label>
            <Opt name="marital_status">
            <option value="">Select</option>
            <option value="Single">Unmarried</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
            </Opt>
            </FormRow>
            <FormRow>
            <Label>Father Name: </Label>
            <Input type="text" name="father_name"/>
            </FormRow>
            <FormRow>
            <Label>Mother Name: </Label>
            <Input type="text" name="mother_name"/>
            </FormRow>
            <FormRow>
            <Label>Phone: </Label>
            <Input type="number" name="phone"/>
            </FormRow>
            <FormRow>
            <Label>Email: </Label>
            <Input type="email" name="email"/>
            </FormRow>
            <FormRow>
            <Label>Country: </Label>
            <Opt name="country" onChange={(event)=>setCountry(event.target.value)}>
            <option value="">Select</option>
            {
              countries && countries.map(({name,code})=><option  value={code} key={code}>{name}</option>)
            }
            </Opt>
            </FormRow>
            <FormRow>
            <Label>State: </Label>
            {
              country==="IN"? <Opt name="state" >
              <option value="">Select</option>
              {
                states && Object.entries(states).map(([code,name])=><option value={code} key={code}>{name}</option>)
              }
              </Opt>: <Input type="text" name="state"/>
            }
            </FormRow>
            <FormRow>
            <Label>Address: </Label>
            <Input type="text" name="address"/>
            </FormRow>
            <FormRow>
            <Label>City: </Label>
            <Input type="text" name="city"/>
            </FormRow>
            <FormRow>
            <Label>Pincode: </Label>
            <Input type="number" name="pincode"/>
            </FormRow>
            <FormRow>
            <Label>Caste: </Label>
            <Opt name="caste">
            <option value="">Select</option>
            <option value="Gen">General</option>
            <option value="OBC">OBC</option>
            <option value="SC/ST">SC/ST</option>
            </Opt>
            </FormRow>
            <FormRow>
            <Label>Department: </Label>
            <Opt name="department">
            <option value="">Select</option>
            {
              depts && Object.entries(depts).map(([dept,ward])=><option value={dept} key={dept}>{dept}</option>)
            }
            </Opt>
            </FormRow>
            <FormRow>
            <Label>Insured: </Label>
            <Opt name="insured">
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </Opt>
            </FormRow>
            <br/>
            <Button type="submit" hoverSize={"19px"} hoverPadding={"14px"}>Submit</Button>
        </FormContainer>
        </LoginCard>
        <Toaster open={open} setOpen={setOpen}/>
      </Main>
    </>
  )
}
