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
			<li>Portfolio</li>
			<li>About me</li>
			<li>Contact</li>
			<li className="icon"><i class="fab fa-github"></i></li>
			<li className="icon"><i class="fab fa-linkedin"></i></li>
		</ul>
		)
}