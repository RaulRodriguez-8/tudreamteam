import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import foto from '../img/cruyffoter.png';



import { faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
	return (
		<ContenedorFooter>
			<Menu>
			<p className="textofooter">Más sobre El Dream Team</p>
            <a href="https://www.instagram.com/eldreamteam96/" target="_blank" ><FontAwesomeIcon icon={faInstagram} class="iconosfooter"/></a>
            <a href="https://twitter.com/ElDreamTeam96" target="_blank" ><FontAwesomeIcon icon={faTwitter} class="iconosfootertres"/></a>
			</Menu>
            
		</ContenedorFooter>
	);
}

const ContenedorFooter = styled.header`
	text-align: center;
	margin-top: 40px;
    .dreamteam {
        margin-top: 10px;
    }
`;



const Menu = styled.nav`
	a {
		text-decoration: none;
		color: #;
		margin: 0 10px;
	}

	a.active {
		border-bottom: 2px solid #;
		padding-bottom: 3px;
	}
    
    .iconosfootertres{
        width: 50px;
        color:#F6BE00;
    }
    .iconosfooter{
        width: 50px;
        color:#F6BE00;
    }
    


`;

export default Footer;