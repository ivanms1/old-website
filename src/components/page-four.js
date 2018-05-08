import React from 'react';

export default function PageFour({position, remove}) {
	let title = document.querySelector('.page-four-title');
	let form = document.querySelector('.form');
	let connect = document.querySelector('.connect');

	if(window.innerWidth <= 800){
		if(position > 2300)  title.classList.add('page-4-show');
		if(position > 2400) form.classList.add('page-4-show');
		if(position > 2500) connect.classList.add('page-4-show');
	} else {
		if(position > 1350)  title.classList.add('page-4-show');
		if(position > 1450) form.classList.add('page-4-show');
		if(position > 1550) connect.classList.add('page-4-show');
	}
	return (
		<div onClick={remove} className="page-four">
			<h1 className="page-four-title">Contact</h1>
			<div className="contact-form">
				<form className="form" action="">
					<p>Please fill this form</p>
					<input type="text" name="name" placeholder="Your name"/>
					<input type="email" name="email" placeholder="Your email"/>
					<textarea rows='3' cols='5' name="message" placeholder="Your message"></textarea>
					<button type='submit' value='Submit'>Submit</button>
				</form>
				<div className="connect">
					<p>For any further questions:</p>
					<p>Email me at <a href="/">ivanms1@gmail.com</a></p>
				</div>
			</div>
			<div className="footer">
				<p>© Ivan Saldano 2018. All rights reserved</p>
			</div>
		</div>
		
		)
}