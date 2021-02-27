import React, {Component} from 'react'
import '../../css/making.css';
import banner_make from '../../img/banner/banner_draw.png';
import Pagination from "../ReactstrapPagination";
import {Button ,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {UncontrolledCarousel} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import below from '../../img/menu/below.png'
import items from './making_content2'



class making extends Component{
    constructor(props){
		super(props);
		this.state = {
			modal:false,
            num:0,
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
                        <span className="good_word"><span>“ 모든 위대한 예술가도 맨 처음에는 아마추어였다. ”</span><br/><br/>Ralph Waldo Emerson<br/><p>시인, 사상가</p></span>
                        <img src={banner_make} alt=""/>
                    </div>

                    <div className="button">
                        <img src={below} alt="below"/>
                    </div>

                    <div className="archieve">
                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(0)} data-text={"셀린\n크루 스카이 그려주기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'img/drawing/셀린_그림1.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(1)} data-text={"마크\n물라스틱 레고 블럭"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'img/making/마크.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(2)} data-text={"젤로\n캣 타워"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'img/making/젤로2.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>

                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(3)} data-text={"예킹&RJ\n의자 만들기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'img/making/예킹&RJ.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(4)} data-text={"펌킨\n할로윈 호박 만들기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'img/making/펌킨.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(5)} data-text={"프로핏\n손풍기 제작하기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'img/making/프로핏.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>

                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(6)} data-text={"메시\n인피니트 볼"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'img/making/메시.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(7)} data-text={"Jake\n빙글빙글 닥터 스트레인지"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'img/making/jake.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" onClick={e=>this.toggle(8)} data-text={"로이\n나만의 패션 컬렉션"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'img/making/로이.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>
                    </div>
                    
                    <div className="Pagination">
                        <span><Pagination page_num={this.state.page_num} type="/draw"/></span>     
                    </div>
                    
                </div> 
            </>
            
        )
    }
}

export default making;