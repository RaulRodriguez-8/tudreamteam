import React from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/footer';
import Inicio from './componentes/Inicio';
import Equipos from './equipos/Equipos';
import AcercaDe from './componentes/AcercaDe';
import Error404 from './componentes/Error404';

import Create1 from './create/createbarsa';
import Createdos from './create/createatleti';
import Create3 from './create/createmadrid';
import Create4 from './create/createrreal';
import Create5 from './create/createbilbao';
import Create6 from './create/createsevilla';
import Create7 from './create/createbetis';
import Create8 from './create/createvillarreal';
import Create9 from './create/createosasuna';
import Create10 from './create/creategetafe';
import Create11 from './create/createespanyol';
import Create12 from './create/creategranada';
import Create13 from './create/createelche';
import Create14 from './create/createcadiz';
import Create15 from './create/createlevante';
import Create16 from './create/createvalencia';
import Create17 from './create/createalaves';
import Create18 from './create/createmallorca';
import Create19 from './create/createrayo';
import Create20 from './create/createcelta';

import Editar1 from './editar/editarbarsa';
import Editardos from './editar/editaratleti';
import Editar3 from './editar/editarmadrid';
import Editar4 from './editar/editarreal';
import Editar5 from './editar/editarbilbao';
import Editar6 from './editar/editarsevilla';
import Editar7 from './editar/editarbetis';
import Editar8 from './editar/editarvillarreal';
import Editar9 from './editar/editarosasuna';
import Editar10 from './editar/editargetafe';
import Editar11 from './editar/editarespanyol';
import Editar12 from './editar/editargranada';
import Editar13 from './editar/editarelche';
import Editar14 from './editar/editarcadiz';
import Editar15 from './editar/editarlevante';
import Editar16 from './editar/editarvalencia';
import Editar17 from './editar/editaralaves';
import Editar18 from './editar/editarmallorca';
import Editar19 from './editar/editarrayo';
import Editar20 from './editar/editarcelta';


import styled from 'styled-components';

import Atleti from './equipos/Atleti';
import Madrid from './equipos/Madrid';
import Barsa from './equipos/Barsa';
import Sevilla from './equipos/Sevilla';
import Betis from './equipos/Betis';
import Real from './equipos/Real';
import Valencia from './equipos/Valencia';
import Villarreal from './equipos/Villarreal';
import Bilbao from './equipos/Bilbao';
import Mallorca from './equipos/mallorca';
import Osasuna from './equipos/osasuna';
import Granada from './equipos/granada';
import Espanyol from './equipos/espanyol';
import Celta from './equipos/celta';
import Levante from './equipos/levante';
import Alaves from './equipos/alaves';
import Cadiz from './equipos/cadiz';
import Getafe from './equipos/getafe';
import Rayo from './equipos/rayo';
import Elche from './equipos/elche';
import Equipoano from './equipos/Dreamteam';









const App = () => {
	return (
		<BrowserRouter>
			<ContenedorPrincipal className="contenedorprincipal">
				<Header />
				
				<Main>
					<Routes>
					
						<Route path="*" element={<Error404 />} />
						<Route path="/" element={<Inicio />} />
						<Route path="/equipos" element={<Equipos />} />
						<Route path="/acerca-de" element={<AcercaDe />} />
						<Route path="/createbarsa" element={ <Create1 /> } />
						<Route path="/createatleti" element={ <Createdos /> } />
						<Route path="/createmadrid" element={ <Create3 /> } />
						<Route path="/createrreal" element={ <Create4 /> } />
						<Route path="/createbilbao" element={ <Create5 /> } />
						<Route path="/createsevilla" element={ <Create6 /> } />
						<Route path="/createbetis" element={ <Create7 /> } />
						<Route path="/createvillarreal" element={ <Create8 /> } />
						<Route path="/createosasuna" element={ <Create9 /> } />
						<Route path="/creategetafe" element={ <Create10 /> } />
						<Route path="/createespanyol" element={ <Create11 /> } />
						<Route path="/creategranada" element={ <Create12 /> } />
						<Route path="/createelche" element={ <Create13 /> } />
						<Route path="/createcadiz" element={ <Create14 /> } />
						<Route path="/createlevante" element={ <Create15 /> } />
						<Route path="/createvalencia" element={ <Create16 /> } />
						<Route path="/createalaves" element={ <Create17 /> } />
						<Route path="/createmallorca" element={ <Create18 /> } />
						<Route path="/createrayo" element={ <Create19 /> } />
						<Route path="/createcelta" element={ <Create20 /> } />

						<Route path='/editarbarsa/:id' element={ <Editar1 /> } />
						<Route path='/editaratleti/:id' element={ <Editardos /> } />
						<Route path='/editarmadrid/:id' element={ <Editar3 /> } />
						<Route path='/editarreal/:id' element={ <Editar4 /> } />
						<Route path='/editarbilbao/:id' element={ <Editar5 /> } />
						<Route path='/editarsevilla/:id' element={ <Editar6 /> } />
						<Route path='/editarbetis/:id' element={ <Editar7 /> } />
						<Route path='/editarvillarreal/:id' element={ <Editar8 /> } />
						<Route path='/editarosasuna/:id' element={ <Editar9 /> } />
						<Route path='/editargetafe/;id' element={ <Editar10 /> } />
						<Route path='/editarespanyol/:id' element={ <Editar11 /> } />
						<Route path='/editargranada/:id' element={ <Editar12 /> } />
						<Route path='/editarelche/:id' element={ <Editar13 /> } />
						<Route path='/editarcadiz/:id' element={ <Editar14 /> } />
						<Route path='/editarlevante/:id' element={ <Editar15 /> } />
						<Route path='/editarvalencia/:id' element={ <Editar16 /> } />
						<Route path='/editaralaves/:id' element={ <Editar17 /> } />
						<Route path='/editarmallorca/:id' element={ <Editar18 /> } />
						<Route path='/editarrayo/:id' element={ <Editar19 /> } />
						<Route path='/editarcelta/:id' element={ <Editar20 /> } />

						<Route path="/atleti" element={<Atleti />} />
						<Route path="/madrid" element={<Madrid />} />
						<Route path="/barsa" element={<Barsa />} />
						<Route path="/sevilla" element={<Sevilla />} />
						<Route path="/betis" element={<Betis />} />
						<Route path="/valencia" element={<Valencia />} />
						<Route path="/real" element={<Real />} />
						<Route path="/bilbao" element={<Bilbao />} />
						<Route path="/villarreal" element={<Villarreal />} />
						<Route path="/espanyol" element={<Espanyol />} />
						<Route path="/granada" element={<Granada />} />
						<Route path="/mallorca" element={<Mallorca />} />
						<Route path="/osasuna" element={<Osasuna />} />
						<Route path="/Rayo" element={<Rayo />} />
						<Route path="/getafe" element={<Getafe />} />
						<Route path="/alaves" element={<Alaves />} />
						<Route path="/levante" element={<Levante />} />
						<Route path="/cadiz" element={<Cadiz />} />
						<Route path="/celta" element={<Celta />} />
						<Route path="/elche" element={<Elche />} />
						<Route path="/dreamteam" element={<Equipoano />} />








					</Routes>
				</Main>

				<Footer />
			</ContenedorPrincipal>
		</BrowserRouter>
	);
}

const ContenedorPrincipal = styled.div`
	padding: 40px;
	width: 100%;
	max-width: 70%;
`;

const Main = styled.main`
	background: #fff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0px 5px 5px rgba(129, 129, 129, 0.1);
	
`;
 
export default App;
