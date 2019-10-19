import React from 'react';
import './style.css';

function Simulation(){
	return (
		<div className = "simulation_main" > 
			<iframe src="https://www.solarsystemscope.com/iframe" width="100%" height="885" title="우주 시뮬레이션" style= {{ border: "0.2px solid black"}}></iframe>
		</div>
	);
}

export default Simulation;