import React from 'react';
import ProjectList from './project-list';

export default function PageTwo(props) {
		return (
		<div className="page-two">
			<h1 className="page-two-title">Portfolio</h1>
			<ProjectList position={props.position}/>
		</div>
		)
	}