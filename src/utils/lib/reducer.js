
export const handleCoursReducer = (state,action)=>{
    // action: {type:"todo/selectCours,payload:{crenauId:1,coursIndex}}
    let crenau = state.creneaux.find(crenauElement=>{
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
}

export const collectCoursReducer = (state,action)=>{
    let cour = state.find(elementCour=>{
        return ((elementCour.coursIndex===action.payload.coursIndex)&&(elementCour.crenauId===action.payload.crenauId))
    })

    if (cour) {
        state = state.filter(cour => !((cour.coursIndex===action.payload.coursIndex)&&(cour.crenauId===action.payload.crenauId)));  
    }else{
        state = state.filter(cour=>!((cour.jourindex===action.payload.jourindex)&&(cour.crenauId===action.payload.crenauId)))
        state.push(action.payload)
    }
    return state
}