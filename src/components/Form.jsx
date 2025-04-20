import React from 'react'

export const Form = ({produitForm,setProduitForm,ajouter,action,color}) => {
    return (
        <div className='col-6 mx-auto shadow p-3'>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="name">Libelle:</label>
                    <input value={produitForm.libelle}  onChange={(e)=>setProduitForm({...produitForm,libelle:e.target.value})}  type="text" className='form-control' />
              
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="name">Prix:</label>
                    <input value={produitForm.prix} onChange={(e)=>setProduitForm({...produitForm,prix:e.target.value})} type="text" className='form-control' />
                </div>
                <div className="mb-3">
                    <button onClick={ajouter} className={'btn btn-sm btn-'+color}>{action}</button>
                </div>
          
        </div>
    )
}
