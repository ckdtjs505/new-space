import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import './style.css'
class Testimg extends Component {
    constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
		this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
      }
    
    render() {
    const { Imag, title } = this.props;
    const imgclick = (index) => {
        this.setState({
            modal : !this.state.modal 
        })
    }
    return (
    <div>
        <img  alt="이미지가 없습니다" className="img" src={Imag} onClick={ () => imgclick()} ></img>
        <Modal isOpen={this.state.modal} toggle={this.toggle} style={{maxWidth: '1000px', width: '95%', marginTop : '5rem', marginBottom: '5rem',  textAlign: 'center'}}>
            <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
            <ModalBody>
                <img  className="modal-img" alt="이미지가 없습니다" src={Imag} ></img>
            </ModalBody>
            <ModalFooter>  
                {
                    // userId === '' ?
                    <Button color="secondary" onClick={this.toggle}>종료</Button>
                    // :
                    // <div>
                    // 	<a href={this.state.nimg.href} download>Click to download</a>
                    // 	<Button color="primary" onClick={this.favorin}> 즐겨찾기 </Button>{' '}
                    // 	<Button color="secondary" onClick={this.toggle}>종료</Button>
                    // </div>
                }
                
            </ModalFooter>
        </Modal>
    </div>
    );
  }

}

export default Testimg;