import React from 'react';

import { Link } from 'react-router-dom';
import foto from '../img/atleti.png';
import foto2 from '../img/realmadrid.png';
import foto3 from '../img/barcelona.png';
import foto5 from '../img/sevilla.png';
import foto6 from '../img/betis.png';
import foto7 from '../img/athletic.png';
import foto8 from '../img/valencia.png';
import foto9 from '../img/realsociedad.png';
import foto10 from '../img/espanyol.png';
import foto11 from '../img/rayovallecano.png';
import foto12 from '../img/villarreal.png';
import foto13 from '../img/granada.png';
import foto14 from '../img/celta.png';
import foto15 from '../img/osasuna.png';
import foto16 from '../img/getafe.png';
import foto17 from '../img/elche.png';
import foto18 from '../img/mallorca.png';
import foto19 from '../img/cadiz.png';
import foto20 from '../img/levante.png';
import foto21 from '../img/alaves.png';




const Blog = () => {



	return (
		<div class="tituloequipos">
			<center><h2>Equipos</h2></center><br></br>
			<div class="card text-center">
				<div class="card-body">
					<h3 class="textoequipos"><Link to="/Madrid"><img src={foto2} width="40px" class="fotoescudo" /> Real Madrid</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/Barsa"><img src={foto3} width="40px" class="fotoescudo" /> FC Barcelona</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/Atleti"><img src={foto} width="40px" class="fotoescudo" /> Atletico de Madrid</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/sevilla"><img src={foto5} width="40px" class="fotoescudo" /> Sevilla</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/betis"><img src={foto6} width="40px" class="fotoescudo" /> Real Betis</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/bilbao"><img src={foto7} width="40px" class="fotoescudo" /> Athletic Club</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/valencia"><img src={foto8} width="40px" class="fotoescudo" /> Valencia</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/real"><img src={foto9} width="40px" class="fotoescudo" />Real Sociedad</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/espanyol"><img src={foto10} width="40px" class="fotoescudo" /> Espanyol</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/rayo"><img src={foto11} width="40px" class="fotoescudo" /> Rayo Vallecano</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/villarreal"><img src={foto12} width="40px" class="fotoescudo" />Villarreal</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/granada"><img src={foto13} width="40px" class="fotoescudo" /> Granada</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/celta"><img src={foto14} width="40px" class="fotoescudo" /> Celta</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/osasuna"><img src={foto15} width="40px" class="fotoescudo" />Osasuna</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/getafe"><img src={foto16} width="40px" class="fotoescudo" />Getafe</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/elche"><img src={foto17} width="40px" class="fotoescudo" />Elche</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/mallorca"><img src={foto18} width="40px" class="fotoescudo" />Mallorca</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/cadiz"><img src={foto19} width="40px" class="fotoescudo" />Cadiz</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/levante"><img src={foto20} width="40px" class="fotoescudo" />Levante</Link></h3>
				</div>
			</div>
			<div class="card text-center">
				<div class="card-body">
								<h3 class="textoequipos"><Link to="/alaves"><img src={foto21} width="40px" class="fotoescudo" />Alaves</Link></h3>
				</div>
			</div>
		</div>
	);
}

export default Blog;