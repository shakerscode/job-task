import React from 'react'; 

const Modal = ({openModal, setOpenModal}) => {
    const {name, image, category, brand, size, price, year} = openModal; 

    return (
        <div className='modal-class'>
            <img src={image} alt="" width={'200px'}/>
            <h2>{name}</h2>
            <p>Category: {category}</p> 
            <p>Brand: {brand}</p> 
            <p>Size: {size}</p> 
            <p>Price: {price}</p> 
            <p>Year: {year}</p> 
            <button  className='common-btn-two'>Delete Product</button>
            <button onClick={()=> setOpenModal(false)}  className='common-btn-one'>Close Modal</button>
        </div>
    );
};

export default Modal;