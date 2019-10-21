import React from 'react';
import { InputGroup, Input, Button } from 'reactstrap';
import Testimg from '../../components/img';
import './style.css';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search : 'seoul',
			data : [],
			collectImg : [],
			prevImag : [],
			title : [],
			loading : false,
		};
    }
	
	componentDidMount(){
		this.handleSearch();
	}

	handleChange = (e) => {
		this.setState({
			search: e.target.value
		})
	}
	
	handleSearch = () => {
		const url = `https://images-api.nasa.gov/search?q=${this.state.search}&media_type=image`;
		this.setState({  // 초기화
			img : { 
				title : [],
				href : []
			},
			img2 : { 
				title : [],
				href : []
			},
		})
        fetch(url)  // REST API 호출
			.then(header => header.json())
			.then(data => { 
				this.setState({
					data : data.collection.items,
					loading : false
				})
			})
			.catch(function(err) {
				console.log(err);			
			})
	}
	
	
	render() {
		const {loading} = this.state;
		return (
			<div> 
				<div className="search">
					<div className="search_content">
						<h1 className="h1" >NASA Search Web </h1>
						<div>나사에서 제공되는 이미지를 무료로 살펴보세요</div>
						<InputGroup className ="search_box">
							<Input  style={{width: '10rem' }} onChange={this.handleChange}  value= {this.state.search} />
							<Button type="button" onClick={this.handleSearch} > 검색 </Button>
						</InputGroup>
					</div>
				</div>
				{	
					loading === true	?
					<div className="thumnails">
						<div className="no_thumnails_content">
							<h1>죄송합니다. 검색결과가 없습니다.</h1>
							<div>
								<div>맞춤법이 올바른지 확인해주세요.</div>
								<div>언어는 영어만 가능해요.</div>
								<div>동의어 또는 일반적인 용어를 사용하세요.</div>
							</div>
						</div>
					</div>
					:
					<div className="thumnails" >
						<div className="thumnails_content">
							<div className="imglist">
								{(
									this.state.data.map( (dt,index) => {
										return 	(index % 2 === 0) ? 
												<Testimg   
													Imag = {dt.links[0].href}   // 이미지
													title = {dt.data[0].title}  // 타이틀
													down = {dt.href} 			// 다운로드 이미지
												></Testimg> 
											: null
									})
								)}
							</div>
							<div className="imglist">
								{(
									this.state.data.map( (dt,index) => {
										return 	(index % 2 !== 0) ? 
												<Testimg  className="img"
													Imag = {dt.links[0].href}   // 이미지
													title = {dt.data[0].title}  // 타이틀
													down = {dt.href} 			// 다운로드 이미지
												></Testimg> 
											: null
									})
								)}
							</div>
						</div>
					</div>
					
				}
				
			</div>
			
		);
	}
}

export default Search;