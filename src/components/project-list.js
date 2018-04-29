import React from 'react';
import Project from './project'

export default function ProjectList(props){
	let times = [160, 190, 220, 250, 280, 310];

	let projects = times.map((time) => {
		return <Project position={props.position} time={time}/>
	})
	return(
		<div className="projects">
			{projects}			
		</div>
		)
}