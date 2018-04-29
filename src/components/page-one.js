import React from 'react';
import Navbar from './navbar';

export default function PageOne(props) {
	return (
		<div className='page-one-navbar'>
		<Navbar position={props.position}/>
		<div className="page-one">
			<img className="port-pic" src="../pics/pic2.jpg" alt=""/>
			<h1 className='title'>Ivan Saldano</h1>
			<h3 className='subtitle'>Full Stack Developer</h3>
			<h3 class='hire-me'>Hire Me</h3>
		</div>
		</div>
		)
}