import React, { Component } from 'react';
import ProjectList from './project-list';

export default class PageTwo extends Component {
	constructor(props){
		super(props)
		this.state = { className: 'page-two' };
	}

	componentDidMount(){
		window.addEventListener('scroll', () => {
			if(this.props.position > 200){
			this.setState({ className: 'page-two page-two-show'})
		}
		});
	}
	render(){
		return (
		<div className={this.state.className}>
			<h1 className="page-two-title">Portfolio</h1>
			<ProjectList position={this.props.position}/>
		</div>
		)
	}
}