import React, {Component} from 'react';

export default class Project extends Component{
	constructor(props){
		super(props);
		this.state = { className: 'project'}
	}

	componentDidMount(){
		window.addEventListener('scroll', () => {
			if(this.props.time < this.props.position){
				this.setState({className: 'project project-show' })
			}
		});
	}

	render(){
		return(
		<a rel="noopener noreferrer" target="_blank" href={this.props.link} className={this.state.className}>
			<img src={this.props.image} alt="project"/>
			<p>{this.props.legend}</p>
		</a>
		)
	}
}