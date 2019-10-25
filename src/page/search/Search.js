import React from 'react';
import { InputGroup, Input, Button, Spinner  } from 'reactstrap';
import Testimg from '../../components/img';
import './style.css';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search : 'seoul',
			data : [],
			loading : false,
			error : false,
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
		this.setState({
			loading : true,
			error : false,
		})
        fetch(url)  // REST API 호출
			.then(response => response.json())
			.then(data => { 
				this.setState({
					data : data.collection.items,
					loading : false
				})
			})
			.catch(err => {
				console.log('[requset failed]', err);
			})
			
	}
	
	
	render() {
		const {loading, data, error} = this.state;
		return (
			<div> 
				<div className="search">
					<div className="search_content">
						<h1 className="search-title" >NASA Search Web </h1>
						<div className="search-subtitle">나사에서 제공되는 이미지를 무료로 살펴보세요</div>
						<InputGroup className ="search_box">
							<Input  onChange={this.handleChange}  value= {this.state.search} />
							<Button type="button" onClick={this.handleSearch} > 검색 </Button>
						</InputGroup>
					</div>
				</div>	
				{	
					loading === true ?
					<div className="thumnails">
						<div className="no_thumnails_content">
							<Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
							<br></br>
							<p> 로딩중 입니다 <br/>
							잠시만 기다려주세요</p>
						</div>
					</div>
					:
					(data.length === 0 || error === true) ? 
					<div className="thumnails">
						<div className="no_thumnails_content">
							<img alt ="" src={require('./girl.png')}></img>
							<div>죄송합니다 </div>
							<div>데이터를 찾을 수 없습니다 </div>
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