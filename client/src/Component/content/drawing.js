import React, {Component} from 'react'
import '../../css/making.css';
import banner_make from '../../img/banner/banner_draw.png';

import {Button ,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {UncontrolledCarousel} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

import below from '../../img/menu/below.png'
import items from './photo_list/drawing_content'



class making extends Component{
    constructor(props){
		super(props);
		this.state = {
			modal:false,
            num:1,
            page_num:2,
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
                        <span className="good_word"><span>“ 모든 위대한 예술가도 맨 처음에는 아마추어였다. ”</span><br/><br/>Ralph Waldo Emerson<br/><p>시인, 사상가</p></span>
                        <img src={banner_make} alt=""/>
                    </div>

                    <div className="button">
                        <img src={below} alt="below"/>
                    </div>

                    <div className="archieve">
                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(0)} data-text={"셀린\n크루 스카이 그려주기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/drawing/셀린_그림1.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(1)} data-text={"제니\n크루들 그려주기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/img/drawing/제니_그림.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(2)} data-text={"서윤\n크루 이름 타이포그래피"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/drawing/서윤.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>

                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(3)} data-text={"아토\n아무그림 컬렉션"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/drawing/아토.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(4)} data-text={"하이\n크리스마스 카드 만들기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/img/drawing/하이.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(5)} data-text={"디시마\n딸기오징어 그리기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/drawing/디시마.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>

                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(6)} data-text={"문플로라\n리온회원 그리기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/drawing/문플로라.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(7)} data-text={"오징어\n뱀파이어 웹툰 그리기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/img/drawing/오징어.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(8)} data-text={"언행\n비투비 컬렉션"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/drawing/이민혁.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>

                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(9)} data-text={"윌&짹짹이\n새 그리기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/drawing/윌.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(10)} data-text={"언행\n세븐틴 컬렉션"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/img/drawing/세븐틴.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(11)} data-text={"언행\n비투비 컬렉션"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/drawing/이민혁.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>

                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(12)} data-text={"닉네임\n그림 제목"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/drawing/.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(13)} data-text={"닉네임\n그림 제목"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/img/drawing/.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(14)} data-text={"닉네임\n그림 제목"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/drawing/.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>
                    </div>
                    
                    <div className="Pagination">
                    </div>
                    
                </div> 
            </>
            
        )
    }
}

export default making;