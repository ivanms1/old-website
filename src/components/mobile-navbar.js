import React from 'react';

export default function MobileNavbar({position}){
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
				<li>Portfolio</li>
				<li>About Me</li>
				<li>Contact</li>
				<li><i className="devicon-github-plain colored"></i></li>
				</ul>
			<ul className={className}>
				<li onClick={show} className='home'>
					<div></div>
					<div></div>
					<div></div>
				</li>
			</ul>
		</div>
		
		/**/
		)
}