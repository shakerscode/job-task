import React, { useState } from 'react';
import Card from './components/Card';
import Modal from './components/Modal';

const App = () => {
  const [yearValue, setYearValue] = useState('')
  const [catValue, setCatValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [products, setProduct] = useState([])
  const [openModal, setOpenModal] = useState(false)
  fetch('data.json').then(res => res.json()).then(data => setProduct(data))

  const handleDetails = (product) =>{
    setOpenModal(product) 
  }

// console.log(searchValue);

  return (
    <div>
      <header className='header'>
        <input 
        onChange={(e) => setSearchValue(e.target.value)}
        type="search" 
        placeholder='Search product' />
        <button>Search</button>
      </header>
      <main className='main-div'>
        <section className='bg-one'>
          <div>
            <h3 className='left-side-bar-heading'>Filter</h3>
          </div>
          <div className='filter-section'>
            <p>Filter by Year</p>
            <label><input onChange={(e) => setYearValue(e.target.value)} type="checkbox" value='2022'/>2022</label>
            <label><input onChange={(e) => setYearValue(e.target.value)} type="checkbox" value='2021'/>2021</label>
            <label><input onChange={(e) => setYearValue(e.target.value)} type="checkbox" value='2020'/>2020</label>  
            <p>Filter by Category</p>
            <label><input onChange={(e) => setCatValue(e.target.value)} type="checkbox" value='shoes'/>Shoes</label>
            <label><input onChange={(e) => setCatValue(e.target.value)} type="checkbox" value='t-shirt'/>T-shirt</label>
            <label><input onChange={(e) => setCatValue(e.target.value)} type="checkbox" value='pant'/>Pant</label> 
          </div>
        </section>
        <section className=''>
          <div className='card-box'>
            {
              products.map((p, i) =>
                <Card key={i} product={p} handleDetails={handleDetails} ></Card>
              )
            }
          </div>

          <div className='modal-sec'>
            {
              openModal &&  <Modal openModal={openModal} setOpenModal={setOpenModal}></Modal>
            }
             
          </div>
        </section>
      </main>

    </div>
  );
};

export default App;