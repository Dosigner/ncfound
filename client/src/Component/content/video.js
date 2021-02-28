import React, {Component} from 'react'
import '../../css/making.css';
import banner_make from '../../img/banner/banner_make.png';
import 'bootstrap/dist/css/bootstrap.css'
import below from '../../img/menu/below.png'

class making extends Component{
    render(){
        return(
            <>
                <div className="banner">
                    <span className="good_word"><span>“ 모든 위대한 예술가도 맨 처음에는 아마추어였다. ”</span><br/><br/>Ralph Waldo Emerson<br/><p>시인, 사상가</p></span>
                    <img src={banner_make} alt=""/>
                </div>
                <div className="button">
                    <img src={below} alt="below"/>
                </div>
                <div className="main-content">
                    <div class="archieve">
                        <div class ="video">
                            <iframe width="560px" height="315px" src="https://www.youtube.com/embed/kjHxTXDlX2U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <span class ="description">
                            <p>지뉴<br/><br/>전방향 탐지가 가능한 인터랙션 시각장애인을 위한 스마트 지팡이</p>
                        </span>
                    </div>
                    <div class="archieve">
                        <div class ="video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/SFO2-djspig" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <span class ="description">
                            <p>애플망고<br/><br/>나를 위한 유투브 채널1</p>
                        </span>
                    </div>
                    <div class="archieve">
                        <div class ="video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/A6MQvutftzk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <span class ="description">
                            <p>애플망고<br/><br/>나를 위한 유투브 채널2</p>
                        </span>
                    </div>

                    <div class="archieve">
                        <div class ="video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/A6MQvutftzk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <span class ="description">
                            <p>___닉네임____<br/><br/>_____유투브 채널 설명____</p>
                        </span>
                    </div>
                </div>
                
            </>
        )
    }
}
export default making;