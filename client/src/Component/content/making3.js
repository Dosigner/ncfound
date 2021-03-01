import React, {Component} from 'react'
import banner_make from '../../img/banner/banner_make.png';
import Pagination from "../ReactstrapPagination";
import {Button ,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {UncontrolledCarousel} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import below from '../../img/menu/below.png'
import items from './photo_list/making_content3'

import '../../css/making.css';




class making extends Component{
    constructor(props){
		super(props);
		this.state = {
			modal:false,
            num:1,
            page_num:3,
		}
	}
	toggle =(value)=>{
        console.log(this.state.modal);
        console.log(this.state.num)
		this.setState({modal:!this.state.modal,num:value})
	}
    toggle1=()=>{
        this.setState({modal:!this.state.modal});
    }
    render(){
        /*const csv=require('csvtojson')
        csv().fromFile('./data.csv').then((jsonObj)=>{
            console.log(jsonObj);
        })*/ 
        return(
            <>
                <Modal isOpen={this.state.modal} fade={true} style={{background:'rgb(0,111,66)'}} size="lg">
					<ModalHeader style={{background:'rgb(0,111,66)',color:'white',fontFamily:"'sans-serif', 'Noto Sans KR'",fontWeight:'400'}} toggle={e=>this.toggle1()}>{items[this.state.num][0].caption}</ModalHeader>
					<ModalBody>
						<UncontrolledCarousel items={items[this.state.num]} style={{fontFamily:"'sans-serif', 'Noto Sans KR'", color:'white'}}/>
						{items[this.state.num][0].header}
					</ModalBody>
					<ModalFooter>
						<Button color="success" onClick={e=>this.toggle1()}>확인</Button>
					</ModalFooter>
				</Modal>
                <div className="main-content">
                    <div className="banner">
                        <span className="good_word"><span>“ 실패가 예상될지라도 충분히 중요하다고 생각되는 일이라면 도전하라 ”</span><br/><br/>Elon Mask<br/><p>테슬라 CEO</p></span>
                        <img src={banner_make} alt=""/>
                    </div>

                    <div className="button">
                        <img src={below} alt="below"/>
                    </div>

                    <div className="archieve">
                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(0)} data-text={"닉네임\n작품 설명"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/making/.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(1)} data-text={"닉네임\n작품 설명"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/img/making/.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(2)} data-text={"닉네임\n작품 설명"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/making/.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>

                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(3)} data-text={"닉네임\n작품 설명"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/making/.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(4)} data-text={"닉네임\n작품 설명"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/img/making/.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(5)} data-text={"닉네임\n작품 설명"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/making/.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>

                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(6)} data-text={"닉네임\n작품 설명"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/making/.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(7)} data-text={"닉네임\n작품 설명"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/img/making/.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(8)} data-text={"닉네임\n작품 설명"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/making/.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>

                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(9)} data-text={"닉네임\n작품 설명"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/making/.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(10)} data-text={"닉네임\n작품 설명"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/img/making/.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(11)} data-text={"닉네임\n작품 설명"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/making/.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>
                    </div>
                    
                    <div className="Pagination">
                        <span><Pagination type="" page_num={this.state.page_num}/></span>     
                    </div>
                    
                </div> 
            </>
            
        )
    }
}

export default making;