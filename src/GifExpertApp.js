import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = (  ) => {

    const [Categories, setCategories] = useState(['Naruto']);

    // const handeAdd = () => setCategories( [...Categories, 'Naturo'] ); // aqui se usa el operador spread (...) para agarrar el arreglo anterior y sumarle un nuevo elemento

    return(

        <>
            <header className = 'container'>
                <div className = 'row'>
                    <div className = 'jumbotron col-xl mt-5'>
                        <h1 className = 'display-4'>GifExpertApp</h1>
                        <AddCategory setCategories = { setCategories } />
                    </div>
                </div>
                    {   //No se pueden usar for o esas cosas, solo metodos para devolver algo. map() recorre la posicion del vectore que se seleccione
                        Categories.map( 
                            category => 
                            <GifGrid 
                                key= { category }
                                category= { category } 
                            /> 
                             )
                    }
            </header>
        </>

    );

}

export{
    GifExpertApp
}

