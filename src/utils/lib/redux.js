import { createSlice , configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { handleCoursReducer,changeCreneauxReducer, collectCoursReducer } from "./reducer";

const delay = ms => new Promise(r => setTimeout(r, ms));

export let fetchCours = createAsyncThunk('cours/FindAllCours',
async ()=>{
    try {
        await delay(3000)
        let response = await  fetch('https://mocki.io/v1/9050467a-a57e-4d3b-8861-96f0d3c472fc')
        let data = await response.json()
        //data[0].find()
        return data[0]
    } catch (error) {
       return Promise.reject()
        
    }
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

let statusSlice = createSlice({
    name:"status",
    initialState:{findCourStatus:""},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCours.pending,(state,action)=>{
            state.findCourStatus = 'loading'
            return state
        })
        builder.addCase(fetchCours.fulfilled,(state,action)=>{
            
            state.findCourStatus = 'succeeded'
            return state
        })
        builder.addCase(fetchCours.rejected,(state,action)=>{
           
            state.findCourStatus = 'failed'
            return state
        })
    }
})
export const {handleCours} = creneauxSlice.actions
export const {collectCours} = totaleSlice.actions

export  const store  = configureStore({
    reducer:{
        creneaux: creneauxSlice.reducer,
        total:totaleSlice.reducer,
        status: statusSlice.reducer
    }
})
