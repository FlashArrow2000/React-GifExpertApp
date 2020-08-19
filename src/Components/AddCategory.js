
import PropTypes from 'prop-types';
import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {


    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => setInputValue( e.target.value ); // "e" de evento, o elemento

    const handleSubmit = (e) => {

        e.preventDefault(); // Esto es para prevenir que haga un refresh de la pagina


        if( inputValue.trim().length>2 ){

            setCategories( (categories) => [ inputValue, ...categories] );
            setInputValue('');

        }

    }


    return (

        <form onSubmit = { handleSubmit }>
            <div className="input-group mb-3 mt-3">
                <div className="input-group-prepend">
                    <span 
                        className="input-group-text" 
                        id="basic-addon1">
                            Busca aquí
                    </span>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    aria-label="Naruto" 
                    aria-describedby="basic-addon1"
                    value = { inputValue }
                    onChange = { handleInputChange }
                />
            </div>
        </form>
        
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
