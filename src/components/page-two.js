import React from 'react';
import ProjectList from './project-list';

export default function PageTwo({position, remove}) {
		return (
		<div onClick={remove} className="page-two">
			<h1 className="page-two-title">Portfolio</h1>
			<ProjectList position={position}/>
		</div>
		)
	}