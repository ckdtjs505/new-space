import React from 'react';
import './style.css';
import { Graph } from "react-d3-graph";

const data = {
	nodes: [
		{ id: "New space"},
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
	automaticRearrangeAfterDropNode: true,
	collapsible: true,
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
		  linkLength: 150,
		  linkStrength: 2
		},
		node: {
			fontColor : "white",
			fontWeight : "nomal",
			fontSize : 23,
			size: 300,
			highlightFontSize: 25,
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
		  color: "lightgray",
		  fontColor: "black",
		  fontSize: 8,
		  fontWeight: "normal",
		  highlightColor: "red",
		  highlightFontSize: 8,
		  highlightFontWeight: "normal",
		  labelProperty: "label",
		  mouseCursor: "pointer",
		  opacity: 1,
		  renderLabel: false,
		  semanticStrokeWidth: true,
		  strokeWidth: 3
		}
	};
	
	// d3 : {
	// 	gravity : -1200,
	// 	linkLength : 150
	// },
    // node: {
	// 
    // },
    // link: {
	// 	highlightColor: "red",
	// 	strokeWidth : 4
    // },


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