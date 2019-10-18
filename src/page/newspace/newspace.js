import React from 'react';
import './style.css';
import { Graph } from "react-d3-graph";

const data = {
	nodes: [
		{ id: "New space", 
		// svg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTMuODY3IDUzLjg2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTMuODY3IDUzLjg2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz48cG9seWdvbiBzdHlsZT0iZmlsbDojRkYwMDAwIiBwb2ludHM9IjI2LjkzNCwxLjMxOCAzNS4yNTYsMTguMTgyIDUzLjg2NywyMC44ODcgNDAuNCwzNC4wMTMgNDMuNTc5LDUyLjU0OSAyNi45MzQsNDMuNzk4ICAgMTAuMjg4LDUyLjU0OSAxMy40NjcsMzQuMDEzIDAsMjAuODg3IDE4LjYxMSwxOC4xODIgIiBkYXRhLW9yaWdpbmFsPSIjRkYwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjRUZDRTRBIj48L3BvbHlnb24+PC9nPjwvZz4gPC9zdmc+" 
		},
		{ id: "우주로켓" }, { id: "로켓 기네스", symbolType : "square" }, 	{ id: "로켓의 불꽃" , symbolType : "square"},	{ id: "다양한 로켓" , symbolType : "square"},
		{ id: "우주 탐사" }, { id: "화성 탐사", symbolType : "square" }, 	{ id: "달의 환경", symbolType : "square" },
		{ id: "인공 위성" }, { id: "위성의 구조" , symbolType : "square"}, { id: "위성의 분류" , symbolType : "square"},{ id: "위성의 주파수", symbolType : "square" },
		{ id: "우주 경제" },
	],
    links: [
		{ source: "우주로켓", target: "로켓 기네스" }, 
		{ source: "우주로켓", target: "로켓의 불꽃" },
		{ source: "우주로켓", target: "다양한 로켓" },

		{ source: "우주 탐사", target: "화성 탐사" }, 
		{ source: "우주 탐사", target: "달의 환경" }, 
		
		{ source: "인공 위성", target: "위성의 구조" }, 
		{ source: "인공 위성", target: "위성의 분류" }, 
		{ source: "인공 위성", target: "위성의 주파수" }, 

		{ source: "New space", target: "우주로켓" }, 
		{ source: "New space", target: "우주 탐사" }, 
		{ source: "New space", target: "우주 경제" }, 
		{ source: "New space", target: "인공 위성" }, 

	],
	
};

const myConfig = {

	width : 1850,
	height : 975,
	automaticRearrangeAfterDropNode: false,
	collapsible: false,
	directed: true,
	focusAnimationDuration: 0.75,
	focusZoom: 1,
	highlightDegree: 2,
	highlightOpacity: 0.2,
	linkHighlightBehavior: true,
	maxZoom: 12,
	minZoom: 0.05,
	nodeHighlightBehavior: true,
	panAndZoom: false,
	staticGraph: false,
	staticGraphWithDragAndDrop: false,
	
	d3: {
		alphaTarget: 0.05,
		gravity: -1250,
		linkLength: 225,
		linkStrength: 2
	},
	node: {
		fontColor : "white",
		fontWeight : "nomal",
		fontSize : 30,
		size: 300,
		highlightFontSize: 35,
		mouseCursor: "pointer",
		svg: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUzLjg2NyA1My44NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzLjg2NyA1My44Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojRUZDRTRBOyIgcG9pbnRzPSIyNi45MzQsMS4zMTggMzUuMjU2LDE4LjE4MiA1My44NjcsMjAuODg3IDQwLjQsMzQuMDEzIDQzLjU3OSw1Mi41NDkgMjYuOTM0LDQzLjc5OCAgIDEwLjI4OCw1Mi41NDkgMTMuNDY3LDM0LjAxMyAwLDIwLjg4NyAxOC42MTEsMTguMTgyICIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",
		color: "#d3d3d3",
		highlightColor: "red",
		highlightFontWeight: "bold",
		highlightStrokeColor: "red",
		highlightStrokeWidth: 1.5,
		opacity: 0.9,
		renderLabel: true,
		strokeColor: "none",
		strokeWidth: 1.5,
		symbolType: "circle"
	},
	link: {
		
		highlightColor: "red",
		highlightFontSize: 12,
		highlightFontWeight: "bold",
		labelProperty: "label",
		mouseCursor: "pointer",
		renderLabel: false,
		semanticStrokeWidth: true,
		strokeWidth: 3
	}
};
	
const onClickNode = function(nodeId) {
    window.alert(`Clicked node ${nodeId}`);
};

class Newspace extends React.Component {
	render() {
		return (
			<div className = "newspace_main"> 
				<Graph
					className = "graph"
					id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
					data={data}
					config={myConfig}
					onClickNode={onClickNode}					
				/>
			</div>
		);
	}
}

export default Newspace;