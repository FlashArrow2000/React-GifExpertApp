import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        
        data: [],
        loading: true
    });

    
    useEffect( () => { // Este hook esta hecho para ejecutar un codigo una sola vez. En este caso, el getGifs para no hacer las peticiones http cada vez que se ejecute el useState

        getGifs( category )
            .then( imgs => {
                
                    setState({
                        data: imgs,
                        loading: false
                    });

            } );

    }, [ category ] ) //si se le manda un arreglo vacio de dependencias, quiere decir que getGifs solo se ejecutrara una vez. Pero pra evitar que se ejecute la peticion http de nuevo en cualquier otro dispositivo, se manda la category


    return state; // {data: [], loading: true};

}