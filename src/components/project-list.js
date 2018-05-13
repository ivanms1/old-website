import React from 'react';
import Project from './project'

export default function ProjectList(props){
	let times = [160, 190, 220, 250, 280, 310];
	let timesMob = [200, 400, 600, 800, 1000, 1200];
	let projects = [];
	let legend = ['Spotify App', 'Pomodoro Clock', 'React Calculator', 'Website for non-profit', 'Hostel Website', 'Wikipedia Viewer'];
	let images = ['../pics/spotify.png',
					'../pics/pomodoro.jpg',
					'../pics/calc.png',
					'../pics/uniskript.png',
					'../pics/celamar.jpg',
					'../pics/wiki-viewer.png']
	let links = ['https://spotify-backend-ivan.herokuapp.com/login',
				'https://ivanms1.github.io/pomodoro-clock/',
				'https://codepen.io/ivanms1/full/jYNQGZ/',
				'https://thawing-eyrie-14937.herokuapp.com/',
				'http://www.celamarpichilemu.cl/',
				'https://ivanms1.github.io/wikipedia-viewer/'
				]


	if(window.innerWidth <= 800){
			for(let i = 0; i < 6; i++){
				projects.push(<Project image={images[i]} link={links[i]} legend={legend[i]} key={times[i]} position={props.position} time={timesMob[i]}/>)
			}
	}
		else {
			for(let i = 0; i < 6; i++){
				projects.push(<Project image={images[i]} link={links[i]} legend={legend[i]} key={times[i]} position={props.position} time={times[i]}/>)
			}
		}

	return(
		<div className="projects">
			{projects}			
		</div>
		)
}