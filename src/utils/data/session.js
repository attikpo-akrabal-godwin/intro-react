/**
 * @typedef {object} cour
 * @property {number} id l'id du cour 
 * @property {string} nom le nom du cours 
 * @property {number} prix le prix du cour 
 * @property {boolean} isSelected si le cours est selectioner ou pas 
 */

/**
 * @type {cour}
 */
const cours = {
    prix:2500,
    isSelected:false
}
/**
 * represente la reponse d'une eventuelle api  
 * 
 * @typedef {object} session 
 * @property {number} _id l'id de la session
 * @property {string} sessionMois le mois de la section
 * @property {string} sessionAnnee l'annee de la section 
 * @property {string} dateDebut la date de debut 
 * @property {string} dateFin la date de fin de session
 * @property {Array<crenau>} creneaux contient la liste des creneaux horaire 
 * 
 */


/**
 * @type {session[]} 
 */

/**
 * @typedef {object} crenau
 * @property {number} id  l'id du crenau horaire 
 * @property {string} horaire l'horaire du crenau 
 * @property {Array< Array<cour>>} jour  tableau de dimension 7 qui represente les jours il comtient les cours par jour 
 */
const SESSION =  [
    {
        _id:1,
        sessionMois:"DECEMBER",
        sessionAnnee:"2022",
        dateDebut:"04 déc. 2022",
        dateFin:"19 janv. 2023",
        creneaux:[
            {
                id:1,
                horaire:"18:10",
                jours:[
                    [{...cours,nom:"physique",id:1},{...cours,nom:"poo",id:2},{...cours,nom:"html",id:3},{...cours,nom:"react",id:4}],//lundi
                    [null,null,null,null],//mardi
                    [{...cours,nom:"economie",id:9},{...cours,nom:"anglais",id:10},null,null],//mercredi
                    [null,{...cours,nom:"sport",id:14},null,null],//jeudi
                    [null,null,null,null],//vendredi
                    [null,null,null,null],//samedi
                    [null,null,null,null]// dimanche
                ]
            },
            {
                id:2,
                horaire:"19:15",
                jours:[
                    [null,null,null,null],  //lundi
                    [{...cours,nom:"electro",id:1},{...cours,nom:"python",id:2},{...cours,nom:"js",id:3},{...cours,nom:"algo",id:4}], //mardi
                    [{...cours,nom:"chimie",id:5},{...cours,nom:"graph",id:6},null,null],  //mercredi
                    [null,null,null,null], //jeudi
                    [{...cours,nom:"economie",id:13},null,null,null], //vendredi
                    [null,null,null,null], //samedi
                    [null,null,null,null]  // dimanche
                ]
            }
            
        ],

    }
]

export default SESSION;