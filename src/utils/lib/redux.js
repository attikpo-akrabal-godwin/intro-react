import { createSlice , configureStore } from "@reduxjs/toolkit";

let totaleSlice = createSlice({
    name:"total",
    initialState:[],//[{id:1,crenauId:2,prix:1500}]
    reducers:{
        collectCours:(state,action)=>{

            let cour = state.find(elementCour=>{
                return ((elementCour.id===action.payload.id)&&(elementCour.crenauId===action.payload.crenauId))
            })

            if (cour) {
                state = state.filter(cour => !((cour.id===action.payload.id)&&(cour.crenauId===action.payload.crenauId)));  
            }else{
                state = state.filter(cour=>!(cour.jourindex===action.payload.jourindex))
                state.push(action.payload)
            }

            

            return state

            
        }
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

        handleCours:(state,action)=>{
            // action: {type:"todo/selectCours,payload:{crenauId:1,coursIndex}}
            let crenau = state.find(crenauElement=>{
               return crenauElement.id === action.payload.crenauId
            })
            if (crenau) {
                crenau.jours.forEach(elementJour => {
                        
                        let cour = elementJour.find(elementCours=>{
                            return    elementCours?.id === action.payload.coursIndex
                        })
                        if (cour) {

                            elementJour.map(elementCours=>{
                                if (elementCours) {
                                    if (elementCours.id!==action.payload.coursIndex) {
                                        elementCours.isSelected=false
                                    }
                                }   
                            })
                            cour.isSelected = !cour.isSelected

                        }
                  
                });
            }
            
        },
        changeCreneaux:(state,action)=>{
            state = action.payload
            return state
        }
    }
})

export const {handleCours,changeCreneaux} = creneauxSlice.actions







export  const store  = configureStore({
    reducer:{
        creneaux: creneauxSlice.reducer,
        total:totaleSlice.reducer
    }
})
