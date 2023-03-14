import { createSlice } from "@reduxjs/toolkit";

const initialState={patient:[]}

const patientStore=createSlice({
    name:"PatientData",
    initialState,
    reducers:{
        addData(state,action){
            state.patient=action.payload
        }
    }
})

export default patientStore.reducer;

export const {addData}= patientStore.actions
