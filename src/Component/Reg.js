/** @jsxImportSource @emotion/react */
import { Button,FormContainer,FormRow,Input, LoginCard, Main, Label, Opt } from '../EmotionCss/CommonEmotion'

export default function Reg() {



    function upd(event){
        event.preventDefault();
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());
        console.log(value)
        fetch("http://localhost:8080/savePatient",{method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value)})
    }


  return (

    <Main>
        <LoginCard>
        <h1><u>Registration</u></h1><br/>
        <FormContainer method={"POST"} onSubmit={upd}>
            <FormRow>
            <Label>First name: </Label>
            <Input type="text" name="fname"/>
            </FormRow>
            <FormRow>
            <Label>Middle name: </Label>
            <Input type="text" name="mname"/>
            </FormRow>
            <FormRow>
            <Label>Last name: </Label>
            <Input type="text" name="lname"/>
            </FormRow>
            <FormRow>
            <Label>DOB: </Label>
            <Input type="date" name="dob"/>
            </FormRow>
            <FormRow>
            <Label>Gender: </Label>
            <Opt name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
            </Opt>
            </FormRow>
            <FormRow>
            <Label>Marital Status: </Label>
            <Opt name="marital_status">
            <option value="Single">Unmarried</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
            </Opt>
            </FormRow>
            <FormRow>
            <Label>Father name: </Label>
            <Input type="text" name="father_name"/>
            </FormRow>
            <FormRow>
            <Label>Mother name: </Label>
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
            <Label>Address: </Label>
            <Input type="text" name="address"/>
            </FormRow>
            <FormRow>
            <Label>City: </Label>
            <Input type="text" name="city"/>
            </FormRow>
            <FormRow>
            <Label>State: </Label>
            <Input type="text" name="state"/>
            </FormRow>
            <FormRow>
            <Label>Country: </Label>
            <Input type="text" name="country"/>
            </FormRow>
            <FormRow>
            <Label>Pincode: </Label>
            <Input type="number" name="pincode"/>
            </FormRow>
            <FormRow>
            <Label>Caste: </Label>
            <Input type="text" name="caste"/>
            </FormRow>
            <FormRow>
            <Label>Department: </Label>
            <Input type="text" name="department"/>
            </FormRow>
            <FormRow>
            <Label>Insured: </Label>
            <Opt name="insured">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </Opt>
            </FormRow>
            <br/>
            <Button type="submit">Submit</Button>
        </FormContainer>
        </LoginCard>
    </Main>
  )
}
