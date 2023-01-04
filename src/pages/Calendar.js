import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import SESSION from "../utils/data/session";
import { useSelector,useDispatch } from "react-redux"
import { handleCours,fetchCours } from "../utils/lib/redux";


let Calendar = ()=>{
    let dispatch = useDispatch()
    useEffect(()=>{   
      dispatch(fetchCours())
    })
    let navigate = useNavigate()
    const user = localStorage.getItem("user");

    useEffect(()=>{
        if (user!=="conected"){
            navigate("/")   
        }
    })
    
    return (
        <>
          <div className="container" >
            <Head/>
            <main>
                <Table  />
            </main>
          </div>  
        </>
    );
}

/**
 * @param {}
 * @returns {JSX.Element} retour l'entete de la page 
 */
let Head = ()=>{

    let totalPrix = 0
    const TotalTab = useSelector(state=>{
      return state.total
    })
    const firsteSession = useSelector(state=>{
      return state.creneaux
    })

    const findCourStatus = useSelector(state=>{
      return state.status.findCourStatus
    })

    TotalTab.forEach(cour=>{
        totalPrix += cour.prix
    })
    
    let spiner = (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)

  return(
    <>
      <header>
              <h1 className="big-title" >CALENDRIER</h1>
              <hr className="separate"/>
              <ul className="header">
                { 
                  findCourStatus==="succeeded"?(<>
                    <li>SESSION {firsteSession.sessionMois} {firsteSession.sessionAnnee}  </li>
                    <li>{firsteSession.dateDebut} - {firsteSession.dateFin}</li>
                    <li> <span>total:{totalPrix}</span> <button className="btn-a">s'inscrire</button></li>
                  </>):""
                }

                {
                   findCourStatus==="loading"?(
                    spiner
                   ):"" 
                }

               
                    
              </ul>
      </header>
    </>
  )
}

export default Calendar