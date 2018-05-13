import React, { Component } from 'react';
import fire from '../firebase';

export default class Form extends Component {
	constructor(props){
		super(props)
		this.state = { name: '', email: '', message: ''}

		this.itemsRef = fire.database().ref('messages');
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		const {name, email, message } = this.state;
    	alert('Your message was submitted');
    	event.preventDefault();
	    this.itemsRef.push({
	    	name: name,
	    	email: email,
	    	message: message
	    });

	    this.setState({name: '', email: '', message: ''})
  	}

  	handleChange(event) {
  		const target = event.target;
  		const value = target.value;
  		const name = target.name;

  		this.setState({ [name]: value });
  	}

	render(){
		return(
			<form className="form" onSubmit={this.handleSubmit}>
					<p>Please fill this form</p>
					<input type="text" name='name' placeholder="Your name" value={this.state.name} onChange={this.handleChange}/>
					<input type="email" name='email' placeholder="Your email" value={this.state.email} onChange={this.handleChange}/>
					<textarea rows='3' cols='5' name='message' placeholder="Your message" value={this.state.message} onChange={this.handleChange}></textarea>
					<button type='submit' value='Submit'>Submit</button>
			</form>
			)
	}
}