import React, {Component} from 'react'
import '../../css/music.css';
import banner_make from '../../img/banner/banner_music.png';
import 'bootstrap/dist/css/bootstrap.css'
import below from '../../img/menu/below.png'

class making extends Component{
    render(){
        return(
            <>  
                <div className="main-content">
                    <div className="banner">
                        <span className="good_word"><span>“ 음악의 장점은 음악이 그대를 매료시킬 때 그대는 아픔을 잊게된다는 것이다 ”</span><br/><br/>밥 말리<br/><p>레게 음악 대표 작곡가</p></span>
                        <img src={banner_make} alt=""/>
                    </div>
                    <div className="button">
                        <img src={below} alt="below"/>
                    </div>
                    
                    <div className="arc">
                        <div className="player">
                            <h2>당신의 상처보다 당신은 크다</h2>
                                <h4 className="singer">스카이</h4>
                            <audio controls>
                                <source src={process.env.PUBLIC_URL+"/music/스카이노래.mp3"} type="audio/mpeg"/>
                            </audio>
                        </div>

                        {/* 여기 아래부터 편집 가능해 
                        h2 태그 안에는 제목을 넣고, singer 안에는 닉네임을 써줘
                        노래 경로는 로컬디스크 C-> projectory 폴더 클릭
                        client폴더 클릭 -> public 폴더 클릭 -> music 폴더에 노래 파일을 넣어주고
                        아래 src 속성에 "/music/(파일 노래이름).mp3" 으로 바꿔줘*/}
                        <div className="player">
                            <h2>프로젝토리 수평어 송</h2>     
                                <h4 className="singer">로드, 카드, 스카이</h4>
                            <audio controls>
                                <source src={process.env.PUBLIC_URL+"/music/스카이노래.mp3"} type="audio/mpeg"/>
                            </audio>
                        </div>

                        <div className="player">
                            <h2>노래 제목</h2>
                                <h4 className="singer">닉네임은 여기에 적어줘</h4>
                            <audio controls>
                                <source src={process.env.PUBLIC_URL+"/music/(파일 이름).mp3"} type="audio/mpeg"/>
                            </audio>
                        </div>

                        <div className="player">
                            <h2>프로젝토리 수평어 송</h2>
                                <h4 className="singer">닉네임은 여기에 적어줘</h4>
                            <audio controls>
                                <source src={process.env.PUBLIC_URL+"/music/(파일 이름).mp3"} type="audio/mpeg"/>
                            </audio>
                        </div>

                        <div className="player">
                            <h2>프로젝토리 수평어 송</h2>
                                <h4 className="singer">닉네임은 여기에 적어줘</h4>
                            <audio controls>
                                <source src={process.env.PUBLIC_URL+"/music/(파일 이름).mp3"} type="audio/mpeg"/>
                            </audio>
                        </div>

                        <div className="player">
                            <h2>프로젝토리 수평어 송</h2>
                                <h4 className="singer">닉네임은 여기에 적어줘</h4>
                            <audio controls>
                                <source src={process.env.PUBLIC_URL+"/music/(파일 이름).mp3"} type="audio/mpeg"/>
                            </audio>
                        </div>
                    </div>

                    
                </div>
            </>
        )
    }
}
export default making;