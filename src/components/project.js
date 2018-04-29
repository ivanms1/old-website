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
		<a href="" className={this.state.className}><img src="http://via.placeholder.com/350x200" alt=""/><p>Lorem ipsum dolor</p></a>
		)
	}
}