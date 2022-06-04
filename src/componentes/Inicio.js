import React from 'react';
import foto from '../img/dreamteam.jpg';
import foto1 from '../img/cruyffoter.png';


const Inicio = () => {
	return (
		<div>
			<h2>Bienvenidos a "El Dream Team"</h2>
			<p className="subtituloinicio">La mejor base de datos de jugadores de la primera división española de fútbol.<br />
				¡Entrad y Disfrutad!</p> <br />

			<div className="izquierda">
				<h4>¿Qué encontrarás?</h4>
				<p>Las 20 plantillas de los equipos de la liga santander. Actualmente está en versión de prueba y en modo administrador. <br />
					Nuestro objetivo es sacar lo antes posible la vista de usuario y con varias mejoras: login, buscador, apartado de favoritos...</p>
			</div><br />
			<div className="dercha">
				<h4>¿Por qué la 1ª división española?</h4>
				<p>Es una de las mejores ligas del mundo y que más atención llama al aficionado al fútbol. <br />
					En ella juegan los equipos y futbolistas preferidos de todo hincha a este deporte.</p>
			</div><br />
			<div>
				<h4>El Dream Team...¿por qué este nombre?</h4>
				<p>El FC Barcelona de Johan Cruyff maravilló al mundo a finales de los 80's y principios de los 90's con su estilo de juego que le hizo conseguir grandes victorias. <br />
				Un equipor repleto de grandes jugadores...llamado "El Dream Team" de Johan Cryff.<br />
				Siempre he sentido admiración por el estilo de juego de ese equipo, aunque hayan pasado muchos años aún sigue habiendo partidos de ese FC Barcelona <br /> 
				que son todo un tesoro para cualquier aficionado. <br /> <br />
				<center><img src={foto} width="60%" className="dreamfoto"/></center>				
				</p>
			</div><br />
			<div>
				<h4>Proximamente...</h4>
				<p>Tenemos varios proyectos para realizar. En primer lugar terminar "El Dream Team" de la primera división española de fútbol. <br />
				Otro proyecto en el que tenemos mucha ilusión es realizar una base de datos con todos las selecciones y jugadores del próximo muncial de fútbol <br /> 
				que se va a disputar en noviembre. Ese proyecto nos gustaría que fuese similar a "El Dream Team" pero con varias mejores y utilizando otra tecnología distina a React.
				</p>
				<center><img src={foto1} width="60%" className="dreamfoto"/></center>				

			</div>

		</div>
	);


}

export default Inicio;