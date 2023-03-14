import { configureStore } from "@reduxjs/toolkit";
import patientStore from "./patientdata";


export const store= configureStore({reducer: {pat: patientStore}})
