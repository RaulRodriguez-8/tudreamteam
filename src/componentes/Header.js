import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import foto from '../img/cruyffoter.png';



const Header = () => {
	return (
		<ContenedorHeader>
			<div className="cruyffmovil">
				<img src={foto} width="120px"/>
			</div>
			<Titulo className="titulouno"><h1>El Dream Team<img src={foto} width="90px" class="fotobalon" /></h1></Titulo>

			<Menu>
						<NavLink to="/" className="equiposmenu">Inicio</NavLink>
						<NavLink to="/equipo" className="equiposmenu">Equipos</NavLink>
						<NavLink to="/dreamteam" className="equiposmenu">Dreamteam</NavLink>
						<NavLink to="/acerca-de" className="equiposmenu">Sobre mí</NavLink>
			</Menu>
		</ContenedorHeader>
	);
}

const ContenedorHeader = styled.header`
	text-align: center;
	margin-bottom: 40px;
	
`;

const Titulo = styled.h1`
	margin-bottom: 14px;
	font-size: 30px;
	color: black;
	
`;

const Menu = styled.nav`
	a {
		text-decoration: none;
		margin: 0 10px;
		font-size: 25px;
		color:black;
	}
	
`;

export default Header;