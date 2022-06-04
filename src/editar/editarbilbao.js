import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

const Edit = () => {
    const [ nombre, setNombre ] = useState('')
    const [ numero, setNumero ] = useState(0)
    const [ posicion, setPosicion ] = useState('')


    const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const atletico = doc(db, "bilbao", id)
        const data = {nombre: nombre, numero: numero, posicion: posicion}
        await updateDoc(atletico, data)
        navigate('/')
    }

    const getProductById = async (id) => {
        const atletico = await getDoc( doc(db, "bilbao", id) )
        if(atletico.exists()) {
            //console.log(product.data())
            setNombre(atletico.data().nombre)    
            setNumero(atletico.data().numero)
            setPosicion(atletico.data().posicion)

        }else{
            console.log('El producto no existe')
        }
    }

    useEffect( () => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
       <div className='row'>
            <div className='col'>
                <h1>Editar jugador</h1>
                 <form onSubmit={update}>
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
                    <button type='submit' className='btn btn-primary'>Actualizar</button>
                 </form>   
            </div>
        </div>
    </div> 
    )
}

export default Edit