import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

const Create = () => {
  const [ nombre, setNombre ] = useState('')
  const [ numero, setNumero ] = useState(0)
  const [ posicion, setPosicion ] = useState(0)

  const navigate = useNavigate()

  const productsCollection = collection(db, "villarreal")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( productsCollection, { nombre: nombre, numero: numero, posicion: posicion } )
    navigate('/')
    //console.log(e.target[0].value)
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Añadir nuevo jugador</h1>
                 <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={nombre}
                            onChange={ (e) => setNombre(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Numero</label>
                        <input
                            value={numero}
                            onChange={ (e)=> setNumero(e.target.value)} 
                            type="number"
                            className='form-control'
                        />                 
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Posicion</label>
                        <input
                            value={posicion}
                            onChange={ (e)=> setPosicion(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div>  
                    <button type='submit' className='btn btn-primary'>Añadir</button>
                 </form>   
            </div>
        </div>
    </div> 
  )
}

export default Create