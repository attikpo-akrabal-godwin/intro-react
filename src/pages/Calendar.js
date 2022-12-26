import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import SESSION from "../utils/data/session";
import { useSelector,useDispatch } from "react-redux"
import { handleCours,changeCreneaux } from "../utils/lib/redux";
let  firsteSession = SESSION[0]
let Calendar = ()=>{
    let dispatch = useDispatch()
    useEffect(()=>{
      dispatch(changeCreneaux(firsteSession.creneaux))
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

    TotalTab.forEach(cour=>{
        totalPrix += cour.prix
    })

    

  return(
    <>
      <header>
              <h1 className="big-title" >CALENDRIER</h1>
              <hr className="separate"/>
              <ul className="header">
                    <li>SESSION {firsteSession.sessionMois} {firsteSession.sessionAnnee} </li>
                    <li>{firsteSession.dateDebut} - {firsteSession.dateFin}</li>
                    <li> <span>total:{totalPrix}</span> <button className="btn-a">s'inscrire</button></li>
              </ul>
      </header>
    </>
  )
}

export default Calendar