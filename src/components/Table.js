import { useCallback } from "react"
import { useSelector,useDispatch } from "react-redux"
import { changeCreneaux,handleCours ,collectCours } from "../utils/lib/redux"




/**
 * @param {}
 * @returns {JSX.Element} retourne le tableaux 
 */
let Table = ()=>{
    
    const creneauxTab = useSelector(state=>{
       return state.creneaux
    })

    let dispatch = useDispatch()
    let handleOnclick= useCallback((id,crenauId,prix)=>{
        dispatch(handleCours({crenauId:crenauId,coursIndex:id}))
        //dispatch(collectCours({id,crenauId,prix}))

    }) 

    let handleCalculePrix= useCallback((id,crenauId,prix,jourindex)=>{
        dispatch(collectCours({id,crenauId,prix,jourindex}))
    })
    
    

    
    

    
    return (
        <>
            <table className="calendar">
                    <thead>
                        <tr>
                            <th>Horaires</th>
                            <th>Lundi</th>
                            <th>Mardi</th>
                            <th>Mercredi</th>
                            <th>Jeudi</th>
                            <th>Vendredi</th>
                            <th>Samedi</th>
                            <th>Dimanche</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        creneauxTab.map(crenau=>{
                          
                          return (
                            <tr>
                                <td className="heure"> {crenau.horaire}</td>
                                { crenau.jours.map((coursJour,jourindex)=>{
                                    return(
                                        <td>
                                            {coursJour.map(cour=>{
                                                let affichcours
                                                if (cour) {
                                                            affichcours = <div 
                                                            onClick={
                                                                ()=>{
                                                                    handleOnclick(cour.id,crenau.id,cour.prix);
                                                                    handleCalculePrix(cour.id,crenau.id,cour.prix,jourindex);
                                                                }
                                                            } 
                                                            className={!cour.isSelected?"cours":"cours select"}><strong>{cour.nom}:</strong> {cour.prix}fcfa
                                                            </div>
                                                }
                                                
                                                return (
                                                   affichcours
                                                )
                                            })}
                                        </td>
                                    )
                                })}
                            </tr>
                          ) 

                        })
                      } 
                    </tbody>
            </table>
        </>
    )

}

export default Table






//non utiliser 

let Jour = ({jour,crenauId})=>{
   
    let dispatch = useDispatch()
    let handleOnclick= useCallback((id,crenauId)=>{
        dispatch(handleCours({crenauId:crenauId,coursIndex:id}))
    }) 
    
    return(
        <>
            <td>
                {jour.map((cour,key) => {
                   
                    if (cour) {
                        return(<div key={key} onClick={handleOnclick(cour.id)} className={!cour.isSelected?"cours":"cours select"}>{cour.nom}</div>)
                    }  
                })}
                    
            </td>  
        </>
    )
}

let Crenau = ({crenau,handleOnclick})=>{
    return (
        <>
            <tr>
                <td className="heure">{crenau.horaire}</td>
                {crenau.jours.map((jour,key)=>{
                    if (jour) {
                        return (<Jour key={key} jour={jour} crenauId={crenau.id} handleOnclick={handleOnclick} />)
                    }
                })
                }
              
            </tr>
        </>
    )
}