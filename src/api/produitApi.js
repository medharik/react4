import axios from "axios";

export const URL=`https://6679da7d18a459f63951a26a.mockapi.io/products`;

//recuperer (get) les produits depuis l'API
export const allAPI=async  ()=>{
    try {
        const reponse=await axios.get(URL);
        return reponse.data;
        
    } catch (error) {
       console.log(error); 
    }

}

//ajouter (post) leun s produit par API
export const ajouterAPI=async  (produit)=>{
    try {
        //ajouter un produit par axios 

        // const form=new FormData();
        // form.append('libelle',produit.libelle);
        // form.append('prix',produit.libelle);
        const reponse=await axios.post(URL,produit);
        return reponse.data;
        
    } catch (error) {
       console.log(error); 
    }
   

}


// supprimer
export const supprimerAPI=async (id)=>{
console.log('A')
axios.delete(URL+'/'+id).then(reponse=>console.log(reponse)).catch(e=>console.log('erreur',e));
console.log('B')
}

// const d=await ajouter({libelle:"brosse  ",prix:"2.50"});
// console.log(d)