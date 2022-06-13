import './App.css';
import { useState } from 'react';
import Counter from './Component/Counter';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Modal from './Component/Modal';


function App() {
  const [openModal, setOpenModal]= useState(false)


  return (
    <div className="App">
    
      <Header/>
      <button className='openModalBtn' onClick={()=>{setOpenModal(true);}}>Agregar Contador</button>
      <Counter/>
      <Footer/>
      {openModal && <Modal closeModal={setOpenModal}/>} 
    </div>
  );
}

export default App;
