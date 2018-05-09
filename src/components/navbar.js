import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar({position, width}) {

	let className = 'navbar';
	if(position === 0){
		className += ' hidden'
	}
	return (
		<ul className={className}>
			<li className='home'>
				<div></div>
				<div></div>
				<div></div></li>
			<Link activeClass="active" to="page-two" spy={true} smooth={true} offset={-10} duration={700}>
				<li>Portfolio</li>
			</Link>
			<Link activeClass="active" to="page-three" spy={true} smooth={true} offset={-10} duration={700}>
				<li>About Me</li>
			</Link>
			<Link activeClass="active" to="page-four" spy={true} smooth={true} offset={-10} duration={700}>
				<li>Contact</li>
			</Link>
			<li className="icon"><a rel="noopener noreferrer" target="_blank" href="https://github.com/ivanms1"><i className="fab fa-github"></i></a></li>
			<li className="icon"><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ivansaldano"><i className="fab fa-linkedin"></i></a></li>
			<li className="icon"><a rel="noopener noreferrer" target="_blank" href="https://codepen.io/ivanms1/"><i className="fab fa-codepen"></i></a></li>
		</ul>
		)
}
        