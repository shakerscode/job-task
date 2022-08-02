import React from 'react';


const Card = ({product, handleDetails}) => {
    
    const {name, image, category} = product; 

    return (
        <div className='card-items'>
            <img src={image} alt=""/>
            <h2>{name}</h2>
            <p>Category: {category}</p> 
            <button  className='common-btn-one' onClick={()=> handleDetails(product)}>Details</button>
        </div>
    );
};

export default Card;