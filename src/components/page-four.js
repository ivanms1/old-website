import React from 'react';

export default function PageFour(props) {
	return (
		<div className="page-four">
			<h1 className="page-four-title">Contact</h1>
			<div className="contact-form">
				<form action="">
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