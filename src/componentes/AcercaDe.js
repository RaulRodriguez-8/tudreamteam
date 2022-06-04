import React from 'react';
import foto from '../img/yo1.JPG';
import foto2 from '../img/yo2.jpg';

import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AcercaDe = () => {
	return (
		<div>
			<h2>Sobre mí</h2>
			<p>Soy Raúl Rodríguez, actualmente estoy cursando el 2º curso del Grado Superior de Desarrollo de Aplicaciones Web. <br />
			Mi motivación para realizar esta aplicación he sido yo mismo. Me gusta y me motiva a segior aprendiendo y mejoradno el mundo del desarrollo web, y el fútbol es mi pasión.<br />
			Entreno a niños en fútbol base, y como antes he mencionado, el fútbol en general siempre me ha gustado y por eso la creación de esta aplicación.Tengo muchas de ganas de seguir aprendiendo
			y poder mejorar esta aplicación para dar más opciones de uso al cliente. <br /> <br />
			</p>
			<p className="sobremifinal">El Dream Team está hecho por un entrenador de fútbol con todo el cariño del mundo. <br />
			Raúl Rodríguez Aguilera</p> <br /> <br />

			<center><img src={foto} width="60%"/></center> <br /> <br />
			<center><img src={foto2} width="60%"/></center> <br /> <br />


			<div className="contacto">
				<h4>Contacto:</h4>
				<p><FontAwesomeIcon icon={faEnvelope} className="contactoicons"/> raulrodriguezaguilera@gmail.com<br />
				<a href="https://www.linkedin.com/in/raulrodriguezaguilera/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="contactoicons"/> Raúl Rodríguez Aguilera</a>
				</p>
			</div>
		</div>
	);
}
 
export default AcercaDe;