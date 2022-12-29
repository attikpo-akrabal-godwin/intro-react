import { createSlice , configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { handleCoursReducer,changeCreneauxReducer, collectCoursReducer } from "./reducer";

export let fetchCours = createAsyncThunk('cours/FindAllCours',
async ()=>{
   let response = await  fetch('https://mocki.io/v1/9050467a-a57e-4d3b-8861-96f0d3c472fc')
   let data = await response.json()
   return data[0].creneaux
})

let totaleSlice = createSlice({
    name:"total",
    initialState:[],//[{id:1,crenauId:2,prix:1500}]
    reducers:{
        collectCours:collectCoursReducer
    },
    extraReducers:(builder)=>{
        builder.addCase(handleCours,collectCoursReducer)
    }
})





let creneauxSlice = createSlice({
    name:"creneaux",
    initialState:[],
    reducers:{
        handleCours:handleCoursReducer,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCours.fulfilled,(state,action)=>{
            state = action.payload
            return state
        })
    }
})

export const {handleCours} = creneauxSlice.actions
export const {collectCours} = totaleSlice.actions

export  const store  = configureStore({
    reducer:{
        creneaux: creneauxSlice.reducer,
        total:totaleSlice.reducer
    }
})
