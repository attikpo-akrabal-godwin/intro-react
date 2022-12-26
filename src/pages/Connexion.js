import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Connexion = () => {
    let [pseudo,setPseudo] = useState("")
    let [password,setPassword] = useState("")
    let [spamClasse, setSpamClasse] = useState("hd")
    let [erreurMessage,setErreurMessage] = useState([])
    let navigate = useNavigate();

    let handleChange = (e)=>{
        setErreurMessage([])
        setSpamClasse("")
        if (e.target.name==="pseudo") {
            setPseudo(e.target.value)
        }else{
            setPassword(e.target.value)
        }

    }
    
    let handleSubmit = (e)=>{
       
        if (!pseudo) {
            setErreurMessage(err=>{
                return [...err,"veillez renseigner votre pseudo"]
            })
            setPseudo("")
            setSpamClasse("hd-red")
        }

        if (!password) {
            setErreurMessage(err=>{
                return [...err,"veillez renseigner votre mots de passe"]
            }) 
            setPassword("")
            setSpamClasse("hd-red")
            
        }
        if (pseudo&&password) {
            if (password!=="boncool") {
                setErreurMessage(err=>{
                    return [...err,"pseudo ou mot de passe  incorrecte"]
                })
                setSpamClasse("hd-red")
            }else{
                setPseudo("")
                setPassword("")
                localStorage.setItem("user","conected")
                navigate("/calendar")
            }
        }
        
       
    }
    let err = []
    erreurMessage.forEach(element=>{
        err.push(<span className={spamClasse} > {element} </span>)
    })
    return(
        <>
            <div className="container" >
                <div className="form" >
                        
                        <div className="imput-content">      
                            {err}
                            <input name="pseudo" onChange={handleChange} value={pseudo} className="input-txt" placeholder="pseudo"  type="text"   />
                            <input name="password" onChange={handleChange} value={password} className="input-txt" placeholder="mot de passe"  type="password"  />
                            <button onClick={handleSubmit} className="btn-b"> se connecter  </button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Connexion
