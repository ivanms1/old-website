import React from 'react';
import { Link } from 'react-scroll';

export default function MobileNavbar({position, remove}){
		let clase = document.querySelector('.mobile-menu')
		let className = 'navbar-mobile';
			if(position === 0){
			className += ' hidden'
			}

		function show(){
			clase.classList.add('mobile-menu-show');
		}

		
	return(
		<div>
			<ul className='mobile-menu'>
				<Link activeClass="active" to="page-two" spy={true} smooth={true} offset={-10} duration={700}>
					<li onClick={remove}>Portfolio</li>
				</Link>
				<Link activeClass="active" to="page-three" spy={true} smooth={true} offset={-10} duration={700}>
					<li onClick={remove}>About Me</li>
				</Link>
				<Link activeClass="active" to="page-four" spy={true} smooth={true} offset={-10} duration={700}>
					<li onClick={remove}>Contact</li>
				</Link>
				<li><a rel="noopener noreferrer" target="_blank" href="https://github.com/ivanms1"><i className="fab fa-github"></i></a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ivansaldano"><i className="fab fa-linkedin"></i></a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://codepen.io/ivanms1/"><i className="fab fa-codepen"></i></a></li>
			</ul>
			<ul className={className}>
				<li onClick={show} className='home'>
					<div></div>
					<div></div>
					<div></div>
				</li>
				<li className="mobile-logo-container">
					<Link activeClass="active" to="page-one" spy={true} smooth={true} offset={-10} duration={700}>
						<img className="logo" src="./pics/logo.png" alt="ivan logo"/>
					</Link>
				</li>
				
			</ul>
		</div>
		
		/**/
		)
}