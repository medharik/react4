import React from 'react'

export const Alert = ({notice}) => {
    return (
        <div className={`alert alert-${notice.couleur} w-50 mx-auto`} role="alert">
          {notice.texte}
        </div>
    )
}
