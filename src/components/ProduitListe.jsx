import React from 'react'

export const ProduitListe = ({liste,supprimer,editer}) => {
  return (
    <div className='container mt-5'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Libelle</th>
      <th scope="col">Prix</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      liste.map(p=>
        <tr key={p.id}>
          <td>{p.id}</td>
          <td>{p.libelle}</td>
          <td>{p.prix}</td>
          <td>
         <div className="btn-group">
         <button onClick={()=>supprimer(p.id)} className='btn btn-danger'>Supprimer</button>
         <button className='btn btn-warning' onClick={()=>editer(p.id)}>Editer</button>
         </div>
          </td>
        </tr>
      )
    }

   </tbody>
</table>
    </div>
  )
}
