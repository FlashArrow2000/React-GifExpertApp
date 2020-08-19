import React /*{useState, useEffect}*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GridGifItem } from './GridGifItem';

export const GifGrid = ( { category } ) => {


    const { data: images, loading } = useFetchGifs( category );

    // const [images, setImages] = useState([])//El arreglo, que se llama "images" viene vacio por defecto

    

    return (
        <div className= 'container mb-5'>

            <h1 className= 'col-12 bg-primary text-center text-light rounded mb-3'> { category } </h1>

            { loading && <p className='animate__animated animate__flash animate__infinite'>Loading...</p> /*Este es un operador ternario, donde evaluo si loading es true, muestre un parrafo, sino, no haga nada*/ } 

            <div className = 'row'>

                {
                     images.map( img => (
                        <GridGifItem 
                            key= {img.id}
                            {...img} //aqui mando las propiedades del img de forma independiente, solo hace falta desestructurar en el otro componente 
                        />
                    ))
                }
            </div>
            
        </div>
    )
}
