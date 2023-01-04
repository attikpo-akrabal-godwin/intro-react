import { useCallback } from "react"
import { useSelector,useDispatch } from "react-redux"
import { handleCours} from "../utils/lib/redux"




/**
 * @param {}
 * @returns {JSX.Element} retourne le tableaux 
 */
let Table = ()=>{
    const creneauxTab = useSelector(state=>{
        return state.creneaux.creneaux
     })

    const findCourStatus = useSelector(state=>{
        return state.status.findCourStatus
     })
  
    let dispatch = useDispatch()
    let handleOnclick= useCallback((coursIndex,crenauId,prix,jourindex)=>{
        dispatch(handleCours({crenauId,coursIndex,prix,jourindex}))
    }) 

    let spiner = (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)
  
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
                       findCourStatus==="succeeded"?creneauxTab.map((crenau,ind)=>{
                          
                          return (
                            <tr key={ind}>
                                <td className="heure"> {crenau.horaire}</td>
                                { crenau.jours.map((coursJour,jourindex)=>{
                                    return(
                                        <td key={jourindex}>
                                            {coursJour.map((cour,ind)=>{
                                                let affichcours
                                                if (cour) {
                                                            affichcours = <div key={ind} 
                                                            onClick={
                                                                ()=>{
                                                                    handleOnclick(cour.id,crenau.id,cour.prix,jourindex);
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

                        }):""
                      }  

                      {
                         findCourStatus==="loading"?<tr>
                            <td>{spiner}</td>
                            <td>{spiner}</td>
                            <td>{spiner}</td>
                            <td>{spiner}</td>
                            <td>{spiner}</td>
                            <td>{spiner}</td>
                            <td>{spiner}</td>
                            <td>{spiner}</td>
                            </tr> :""
                      } 

                                   
                    </tbody>
            </table>
            {
                findCourStatus==="failed"?
                    <p >veillez reseillez plus tard</p>  
                :"" 
            }   
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