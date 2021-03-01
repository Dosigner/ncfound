import React, {Component} from 'react'
import '../../css/etc.css';
import banner_make from '../../img/banner/banner_etc.png';
import 'bootstrap/dist/css/bootstrap.css'
import below from '../../img/menu/below.png'

class making extends Component{
    render(){
        return(
            <>  
                <div className="main-content">
                    <div className="banner">
                        <span className="good_word"><span>“ 스스로 알을 깨면 한 마리 병아리가 되지만, 남이 깨주면 계란 프라이가 된다 ”</span><br/><br/>프로젝토리<br/><p>Laboratory for future generation</p></span>
                        <img src={banner_make} alt=""/>
                    </div>
                    <div className="button">
                        <img src={below} alt="below"/>
                    </div>

                    <div className="archieve">
                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" data-text={"끼리\n크루 2기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/crew/끼리.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" data-text={"어니\n크루 2기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/img/crew/어니.png'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" data-text={"나나\n크루 2기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/crew/나나.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>

                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" data-text={"서울\n크루 2기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/crew/서울.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" data-text={"미아\n크루 1기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/img/crew/미아.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" data-text={"스카이\n크루 1기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/crew/스카이.jpg'})`}}>
                                </div>
                            </li>    
                        </ul>

                        <ul className="arc_row">
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" data-text={"바다\n크루 1기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/img/crew/바다.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1" data-text={"지뉴\n크루 1기"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/img/crew/지뉴.jpg'})`}}>
                                </div>
                            </li>
                            <li className="wrap_arc_item">
                                <div className="arc_item 1"  data-text={"프리\n크루"} style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/img/crew/오징어.jpg'})`}}>
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