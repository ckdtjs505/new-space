import React from 'react';

function Simulation(){
	return (
		<div style ={{textAlign : "center", backgroundColor : "black"}}> 
			<iframe src="https://www.solarsystemscope.com/iframe" width="1000" height="900" title="우주 시뮬레이션" style= {{minWidth: "500px" ,minHeight: "400px", border: "2px solid black"}}></iframe>
		</div>
	);
}

export default Simulation;