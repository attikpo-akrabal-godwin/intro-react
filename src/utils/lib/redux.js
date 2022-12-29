import { createSlice , configureStore } from "@reduxjs/toolkit";
import { handleCoursReducer,changeCreneauxReducer, collectCoursReducer } from "./reducer";

let totaleSlice = createSlice({
    name:"total",
    initialState:[],//[{id:1,crenauId:2,prix:1500}]
     
    reducers:{
        /**
         * recupere  les cous selectioner 
         */
        collectCours:collectCoursReducer
    }

})

export const {collectCours} = totaleSlice.actions


let creneauxSlice = createSlice({
    name:"creneaux",
    initialState:[
        {
            id:null,
            horaire:null,
            jours:[
                [null,null,null,null],
                [null,null,null,null],
                [null,null,null,null],
                [null,null,null,null],
                [null,null,null,null],
                [null,null,null,null],
                [null,null,null,null],
            ]
        }
    ],
    reducers:{
        /**
         * permet de changer la couleur des cours 
         */
        handleCours:handleCoursReducer,
        /**
         * permet de reinitialiser le state 
         */
        changeCreneaux:changeCreneauxReducer
    }
})

export const {handleCours,changeCreneaux} = creneauxSlice.actions







export  const store  = configureStore({
    reducer:{
        creneaux: creneauxSlice.reducer,
        total:totaleSlice.reducer
    }
})
