import React from 'react';
import { InputGroup, Input,  Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
// import style from './style.css';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search : '',
			data : [],
			img : { 
				title : [
					'Earth Observations taken by the Expedition 10 crew',
					'Earth Observation taken during the Expedition 37 mission',
					'Tropical Storm Dianmu'
				],
				href : [ 
					'http://images-assets.nasa.gov/image/iss010e12103/iss010e12103~orig.jpg',
					'http://images-assets.nasa.gov/image/iss037e005370/iss037e005370~orig.jpg',
					'http://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002003/GSFC_20171208_Archive_e002003~orig.jpg'			
				]
			},
			img2 : { 
				title : [
					'Soyuz docked on ISS',
					'Earth Observations taken by Expedition 38 crewmember',
				],
				href : [ 
					'http://images-assets.nasa.gov/image/iss040e005997/iss040e005997~orig.jpg',
					'http://images-assets.nasa.gov/image/iss038e038300/iss038e038300~orig.jpg',
				]
			},
			nimg : {
				title : [],
				href : [],
			},
			userId : '',
			modal: false
		};
		this.toggle = this.toggle.bind(this);
    }

	// componentDidMount() {
	// 	fetch('/api/account/id').then(({ data }) => {
	// 		this.setState({
	// 			userId: data
	// 		});
	// 	});
	// }
	
	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
  	}
	
	handleChange = (e) => {
		this.setState({
			search: e.target.value
		})
	}
	
	handleSearch = () => {
		const url = `https://images-api.nasa.gov/search?q=${this.state.search}`
        fetch(url)
        .then(header => header.json())
		.then(data => { 
			
			this.setState({
				data : data.collection.items,
				img : { 
					title : [],
					href : []
				},
				img2 : { 
					title : [],
					href : []
				},
            })
			this.handleImg(this.state.data);
        })
        .catch(function(err) {
			console.log(err);
			// if(err.response.status === 400){
			// 	alert('Bad Requst');
			// }else if( err.response.status == 404){
			// 	alert('Not Found');
			// }else {
			// 	alert('server Error');
			// }
			
		})
	}
	
	handleImg = (data) => {
		var count = 0;
		data.forEach((ele) => {
            fetch(ele.href)
            .then( header => header.json())
			.then( img => {
				count++;
				if(count % 2 != 0){
					this.setState({
						img : {
							title : this.state.img.title.concat(ele.data[0].title),
							href : this.state.img.href.concat(img[0])
						}
					})
				}
				else {
					this.setState({
						img2 : {
							title : this.state.img2.title.concat(ele.data[0].title),
							href : this.state.img2.href.concat(img[0])
						} 
					})
				}

            })
            .catch( err => { console.log(err)} )
		})
		
	}
	
	favorin = () => {
		const { title, href } = this.state.nimg;
		fetch('/api/account/favorin', { title, href })
			.then(({ data }) => {
				console.log(data);
			})
			.catch(err => {
				this.setState({ errorMsg: err.response.status });
			});
	}
	
	render() {
		const imgclick1 = (index) => {
			this.setState({
				nimg :  {
					title : this.state.img.title[index],
					href : this.state.img.href[index]
				},
				modal : !this.state.modal 
			})
		}
		const imgclick2 = (index) => {
			this.setState({
				nimg :  {
					title : this.state.img2.title[index],
					href : this.state.img2.href[index]
				},
				modal : !this.state.modal 
			})
		}
		const imglist = this.state.img.href.map(  
			(img, index) => ( 
					<img key={index} className="img" src={img} onClick={ () => imgclick1(index)} ></img>
				)
		);
		const imglist2 = this.state.img2.href.map(  
			(img2, index) => ( 
					<img key={index} className="img" src={img2} onClick={ () => imgclick2(index)}></img>
				)
		);
		const { userId } = this.state;
		const { title } = this.state.img;
		return (
			<div style ={{textAlign : "center", backgroundColor : "black"}}> 
				<iframe src="https://www.solarsystemscope.com/iframe" width="1000" height="900" style= {{minWidth: "500px" ,minHeight: "400px", border: "2px solid black"}}></iframe>
			</div>
			
		);
	}
}

export default Search;