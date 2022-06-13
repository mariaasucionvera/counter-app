import React  from 'react';
import './Modal.css'
import { useState } from 'react';

const Modal = ({closeModal}) =>{
    const [nameCounter, setNameCounter] = useState ("")
    
    const addName = (e) =>{
        setNameCounter(e.target.value)
        console.log (nameCounter)

    }
   
    return(
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                <button onClick={()=>closeModal(false)}> X </button>
                </div>
                <div className='title'>
                    <h1> Escribe el nombre de tu contador</h1>
                </div>

                <div className='body'>
                    <input onChange={addName} value={nameCounter}></input>    
                </div> 

                <div className='footer'>
                    <button> Agregar </button>
                </div>

            </div>
        </div>
    )
}
export default Modal