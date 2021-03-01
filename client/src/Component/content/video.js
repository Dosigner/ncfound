import React, {Component} from 'react'
import '../../css/video.css';
import banner_make from '../../img/banner/banner_video.png';
import 'bootstrap/dist/css/bootstrap.css'
import below from '../../img/menu/below.png'

class making extends Component{
    render(){
        return(
            <>  
                <div className="main-content">
                    <div className="banner">
                        <span className="good_word"><span>“ 사진이 진실이라면, 영화는 초당 24번의 진실이다. ”</span><br/><br/>장 뤽 고다르<br/><p>영화 혁명가</p></span>
                        <img src={banner_make} alt=""/>
                    </div>
                    <div className="button">
                        <img src={below} alt="below"/>
                    </div>

                    {/*******아래는 컨텐츠 내용 부분***********/}

                    <div class ="video">
                        <iframe width="560px" height="315px" src="https://www.youtube.com/embed/SFO2-djspig" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class ="description">
                                <div className="name">애플망고</div>
                                <span>어몽어스 레고 스톱모션 <br/>- 유니 TY 새싹 채널</span>
                        </div>
                    </div>

                    <div class ="video">
                        {/* 아래 iframe 코드 한 줄을 지우고 퍼가기에서 복사해온 코드를 그 자리에 바로 붙여넣기 해줘! */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/A6MQvutftzk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class ="description">
                                <div className="name">애플망고</div>
                                <span>ROBLOX 라디오 노래 코드 <br/> - 유니 TY 새싹 채널</span>
                        </div>
                    </div>

                    <div class ="video">
                        {/* 아래 iframe 코드 한 줄을 지우고 퍼가기에서 복사해온 코드를 그 자리에 바로 붙여넣기 해줘! */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/I4g6ohaclTA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class ="description">
                                <div className="name"> 미아 </div>
                                <div className="detail"> 태국어로 자기소개 타임~ </div>
                        </div>
                    </div>

                    <div class ="video">
                        {/* 아래 iframe 코드 한 줄을 지우고 퍼가기에서 복사해온 코드를 그 자리에 바로 붙여넣기 해줘! */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Dgb1qlcoJzQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class ="description">
                                <div className="name">미아 </div>
                                <div className="detail">태국어에서 어려운 부분은 어떤 것이 있을까?</div>
                        </div>
                    </div>

                    <div class ="video">
                        {/* 아래 iframe 코드 한 줄을 지우고 퍼가기에서 복사해온 코드를 그 자리에 바로 붙여넣기 해줘! */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/kjHxTXDlX2U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class ="description">
                                <div className="name">지뉴 </div>
                                <div className="detail">180도 탐지가 가능한 인터랙션 반응형 시각장애인용 스마트 지팡이</div>
                        </div>
                    </div>

                    <div class ="video">
                        {/* 아래 iframe 코드 한 줄을 지우고 퍼가기에서 복사해온 코드를 그 자리에 바로 붙여넣기 해줘! */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7epqB_0E-Xk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class ="description">
                                <div className="name"> 닉네임을 여기 적어줘 </div>
                                <div className="detail">여기에는 영상에 대한 설명을 적어줘~</div>
                        </div>
                    </div>

                    <div class ="video">
                        {/* 아래 iframe 코드 한 줄을 지우고 퍼가기에서 복사해온 코드를 그 자리에 바로 붙여넣기 해줘! */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7epqB_0E-Xk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class ="description">
                                <div className="name"> 닉네임을 여기 적어줘 </div>
                                <div className="detail">여기에는 영상에 대한 설명을 적어줘~</div>
                        </div>
                    </div>

                    <div class ="video">
                        {/* 아래 iframe 코드 한 줄을 지우고 퍼가기에서 복사해온 코드를 그 자리에 바로 붙여넣기 해줘! */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7epqB_0E-Xk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class ="description">
                                <div className="name"> 닉네임을 여기 적어줘 </div>
                                <div className="detail">여기에는 영상에 대한 설명을 적어줘~</div>
                        </div>
                    </div>

                    <div class ="video">
                        {/* 아래 iframe 코드 한 줄을 지우고 퍼가기에서 복사해온 코드를 그 자리에 바로 붙여넣기 해줘! */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7epqB_0E-Xk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class ="description">
                                <div className="name"> 닉네임을 여기 적어줘 </div>
                                <div className="detail">여기에는 영상에 대한 설명을 적어줘~</div>
                        </div>
                    </div>

                    <div class ="video">
                        {/* 아래 iframe 코드 한 줄을 지우고 퍼가기에서 복사해온 코드를 그 자리에 바로 붙여넣기 해줘! */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7epqB_0E-Xk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class ="description">
                                <div className="name"> 닉네임을 여기 적어줘 </div>
                                <div className="detail">여기에는 영상에 대한 설명을 적어줘~</div>
                        </div>
                    </div>

                    <div class ="video">
                        {/* 아래 iframe 코드 한 줄을 지우고 퍼가기에서 복사해온 코드를 그 자리에 바로 붙여넣기 해줘! */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7epqB_0E-Xk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class ="description">
                                <div className="name"> 닉네임을 여기 적어줘 </div>
                                <div className="detail">여기에는 영상에 대한 설명을 적어줘~</div>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}
export default making;