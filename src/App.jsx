import { useEffect, useState } from "react"
import { Form } from "./components/Form"
import { ProduitListe } from "./components/ProduitListe"
import { Alert } from "./components/Alert";
import axios from "axios";
import { supprimerAPI } from "./api/produitApi";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const INIT = { id: '', libelle: '', prix: '' };
  const [produitForm, setProduitForm] = useState(INIT);
  const [action, setAction] = useState("ajouter");
  const [color, setColor] = useState('primary');
  const [notice, setNotice] = useState({texte:'Nouveau produit',couleur:'primary'})
  useEffect(() => {
    if (action==="ajouter") {
      setColor("primary")
    } else {
      setColor("warning")
    }
  },[action])
  
  const [liste, setListe] = useState([]);
  useEffect(() => {
    axios.get('https://6679da7d18a459f63951a26a.mockapi.io/products').
    then(reponse=>setListe(reponse.data))
    return ()=>{
      console.log('component unmounted')
    }
  }, [])
  

  const ajouter = () => {
    if (!produitForm.id) {
      const prod = { ...produitForm, id: Date.now() };
      setListe([...liste, prod]);
      setNotice({texte:'ajout affectue avec success',couleur:'success'})
      
    }else{
   
      setListe(liste.map(p=>p.id===produitForm.id ? produitForm:p));
      setNotice({texte:'modification affectuee avec success',couleur:'warning'})

      
    
    }


    
    setProduitForm(INIT)
  }
  const supprimer=(id)=>{
    if(confirm('supprimer?')){
      setListe(liste.filter(p=>p.id!=id));
      supprimerAPI(id);
      setNotice({texte:'suppression affectuee avec success',couleur:'danger'})

    }

  }
  const editer=(id)=>{
    const prod = liste.find(p=>p.id==id);
setProduitForm(prod);
setAction("modifier");
setNotice({texte:'Edition du produit '+ produitForm.libelle,couleur:'info'})


}
  const nouveau=()=>{
    setProduitForm(INIT);
    setAction("ajouter");
  }
  return (
    <>
    
    <button onClick={nouveau}>Nouveau</button>
    <Alert notice={notice}/>
<Link to={'/form'}>formulaire produit</Link>
<Link to={'/liste'}>liste des  produits</Link>
    <Routes>
<Route path="/form" element={<> 
      <Form  color={color} action={action} ajouter={ajouter} produitForm={produitForm} setProduitForm={setProduitForm} />
      <h2>Libelle  : {produitForm.libelle}, Prix : {produitForm.prix}</h2></>}/>
      <Route path="/liste" element={<ProduitListe  editer={editer} supprimer={supprimer} liste={liste} />} />
    </Routes>
    </>
  )
}

export default App
