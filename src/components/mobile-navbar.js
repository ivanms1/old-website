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
			</ul>
		</div>
		
		/**/
		)
}