import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'


import foto2 from '../img/villarreal.png';
import mister from '../img/mistervillarreal.webp';

import { faPen, faTrash, faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)


const Villarreal = () => {
  //1 - configuramos los hooks
  const [jugador, setProducts] = useState([])


  //2 - referenciamos a la DB firestore
  const productsCollection = collection(db, "villarreal")

  

  //3 - Funcion para mostrar TODOS los docs
  const getProducts = async () => {
    const data = await getDocs(productsCollection)
    //console.log(data.docs)
    setProducts(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    )
    //console.log(products)
  }


  //4.para borrar
  const deleteProduct = async (id) => {
    const productDoc = doc(db, "villarreal", id)
    await deleteDoc(productDoc)
    getProducts()
  }
  //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Elimina el jugador?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        //llamamos a la fcion para eliminar   
        deleteProduct(id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  //6 - usamos useEffect
  useEffect(() => {
    getProducts()
    // eslint-disable-next-line
  }, [])
  //7 - devolvemos vista de nuestro componente
  return (
    <>
     <div class="container" id="villarreal">
      <div class="row">
        <div class="col">
      <h1 class="" > Plantilla Villarreal CF</h1>
      <center><img src={foto2} width="140px" /></center> <br />
      </div>
      <div class="col">
      <h3 class=""> Entrenador </h3><br />
      <center><img src={mister} width="100px" /></center> <br />
      <h5 class=""> Unai Emery </h5><br />
      </div>
      </div>
    </div>
   
    <div class="paramovil">
    <center><img src={foto2} width="140px" className="escudo"/>              <Link to="/createvillarreal">Añadir nuevo jugador  <FontAwesomeIcon icon={faSquarePlus} className="añadirjugador"/></Link>
</center> <br />

    </div>
    <div className="crearjugador">
              <Link to="/createvillarreal">Añadir nuevo jugador  <FontAwesomeIcon icon={faSquarePlus} className="añadirjugador"/></Link>
      </div>

      {jugador.map((jugador) => (
               

        <div key={jugador.id}>
          <div class="card text-center">
            <div class="card-body">
              <h3 class="card-title">{jugador.nombre}</h3>
              <h5 class="card-title">{jugador.numero}</h5>
              <p class="card-text">{jugador.posicion}</p>
            </div>
            <Link to={`/editarvillarreal/${jugador.id}`} className="btn btn-light"><FontAwesomeIcon icon={faPen} /></Link>
            <button onClick={ () => { confirmDelete(jugador.id) } } className="btn btn-danger"><FontAwesomeIcon icon={faTrash}/></button>
          </div>
        </div>
      ))}

    </>

  )
}

export default Villarreal;