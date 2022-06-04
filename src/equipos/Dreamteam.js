import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'





//import balonoro from '../img/balonoro.webp';

import courtois from '../img/courtois.png';
import reinildo from '../img/reinildo.png';
import albiol from '../img/albiol.png';
import bellerin from '../img/bellerin.png';
import kounde from '../img/kounde.png';
import modric from '../img/modric.png';
import guido from '../img/guido.png';
import pedri from '../img/pedri.png';
import parejo from '../img/parejo.png';
import aspas from '../img/aspas.png';
import bencema from '../img/benzema.png';

import madrid from '../img/realmadrid.png';
import villarreal from '../img/villarreal.png';
import betis from '../img/betis.png';
import sevilla from '../img/sevilla.png';
import celta from '../img/celta.png';
import barsa from '../img/barcelona.png';
import atleti from '../img/atleti.png';









const Onceaño = () => {
  //1 - configuramos los hooks
  const [jugador, setProducts] = useState([])

  //2 - referenciamos a la DB firestore
  const productsCollection = collection(db, "11delaño")

  //3 - Funcion para mostrar TODOS los docs
  const getProducts = async () => {
    const data = await getDocs(productsCollection)
    //console.log(data.docs)
    setProducts(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    )
    //console.log(products)
  }
   //4 - Funcion para eliminar un doc
   
   //5 - Funcion de confirmacion para Sweet Alert 2
   
 
   //AÑADIR A FAVORITOS
      //Cada vez que count cambia, vuelve a ejecutarse 
   
   //6 - usamos useEffect
   useEffect( () => {
     getProducts()
     // eslint-disable-next-line
   }, [] )
   //7 - devolvemos vista de nuestro componente
  return (
    <>
    <div class="fondo">
      <h1 class="equipoaño">Equipo del año </h1><br />


      {jugador.map((jugador) => (
        
          <div key={jugador.id}>
            <center>
            <div class="container">
            <div class="row">
              <div class="col">
                <img className="fotojugador" src={courtois} width="100px" />
                <h2 class="card-title">{jugador.nombre2}</h2>
                <h4 class="card-text">{jugador.posicion2}</h4>
                <img className="" src={madrid} width="70px" />
              </div>
              </div>
              <hr></hr>

            <div class="row">
           <div class="col" id="bellerin">
                <img className="fotojugador" src={bellerin} width="100px" />
                <h2 class="card-title">{jugador.nombre6}</h2>
                <h4 class="card-text">{jugador.posicion6}</h4>
                <img className="" src={betis} width="70px" />

              </div>
              
              <div class="col" id="kounde">
                <img className="fotojugador" src={kounde} width="100px" />
                <h2 class="card-title">{jugador.nombre4}</h2>
                <h4 class="card-text">{jugador.posicion4}</h4>
                <img className="" src={sevilla} width="70px" />
              </div>
              <div class="col" id="albiol">
                <img className="fotojugador" src={albiol} width="100px" />
                <h2 class="card-title">{jugador.nombre5}</h2> 
                <h4 class="card-text">{jugador.posicion5}</h4><br />
                <img className="" src={villarreal} width="70px" />
              </div>
              
              <div class="col" id="reinildo">
                <img className="fotojugador" src={reinildo} width="100px" />
                <h2 class="card-title">{jugador.nombre3}</h2>
                <h4 class="card-text">{jugador.posicion3}</h4>
                <img className="" src={atleti} width="70px" />
              </div>
            </div>
            <hr></hr>
            
            <div class="row">
              <div class="col" id="modric">
                <img className="fotojugador" src={modric} width="100px" />
                <h2 class="card-title">{jugador.nombre7}</h2>
                <h4 class="card-text">{jugador.posicion7}</h4>
                <img className="" src={madrid} width="70px" />
              </div>
              <div class="col" id="parejo">
                <img className="fotojugador" src={parejo} width="100px" />
                <h2 class="card-title">{jugador.nombre8}</h2>
                <h4 class="card-text">{jugador.posicion8}</h4>
                <img className="" src={villarreal} width="70px" />
              </div>
              <div class="col" id="guido">
                <img className="fotojugador" src={guido} width="100px" />
                <h2 class="card-title">{jugador.nombre9}</h2>
                <h4 class="card-text">{jugador.posicion9}</h4>
                <img className="" src={betis} width="70px" />
              </div>
              <div class="col">
                <img className="fotojugador" src={pedri} width="100px" />
                <h2 class="card-title">{jugador.nombre10}</h2>
                <h4 class="card-text">{jugador.posicion10}</h4>
                <img className="" src={barsa} width="70px" />
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col" id="aspas">
                <img className="fotojugador" src={aspas} width="100px" />

                <h2 class="card-title">{jugador.nombre11}</h2>
                <h4 class="card-text">{jugador.posicion11}</h4>
                <img className="" src={celta} width="70px" />
              </div>
              <div class="col">
                <img className="fotojugador" src={bencema} width="100px" />
                <h2 class="card-title">{jugador.nombre1}</h2>
                <h4 class="card-text">{jugador.posicion1}</h4>
                <img className="" src={madrid} width="70px" />
              </div>
            </div>
          </div>
          </center>
        </div>
      ))}
</div>
    </>

  )
      }
export default Onceaño