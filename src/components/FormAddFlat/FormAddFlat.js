import React from 'react';
import "./FormAddFlat.scss" 


const FormAddFlat = () => {
    return (
        <div>
        <h1 className="title-form"> Ajouter un appartement </h1>

        <form className="container-form">
            <label htmlFor="title">Titre</label>    
            <input type="text" id="ville" placeholder="Entrez le nom de la ville"/>
            
            <label htmlFor="title">Description</label>    
            <input type="text" id="description" placeholder="Entrez une description"/>

            <label htmlFor='title'>Prix</label>
            <input type="text" id="prix" placeholder="Entrez le prix de l'appart" />
            
            <button>Rajoutez un appartement</button>

        </form>
        </div>
    );
};

export default FormAddFlat;