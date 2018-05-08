import React from 'react';

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
			<li><a href="">Portfolio</a></li>
			<li><a href="">About me</a></li>
			<li><a href="">Contact</a></li>
			<li className="icon"><a rel="noopener noreferrer" target="_blank" href="https://github.com/ivanms1"><i className="fab fa-github"></i></a></li>
			<li className="icon"><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ivansaldano"><i className="fab fa-linkedin"></i></a></li>
			<li className="icon"><a rel="noopener noreferrer" target="_blank" href="https://codepen.io/ivanms1/"><i className="fab fa-codepen"></i></a></li>
		</ul>
		)
}