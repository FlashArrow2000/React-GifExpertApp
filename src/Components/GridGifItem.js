import React from 'react'

export const GridGifItem = ( {id, title, url} ) => {
    return (
        
        <div className="col-3 mb-2 animate__animated animate__zoomInDown">
            <img src={ url } className="card-img-top" alt= { title } />
        </div>  
    )
}
