import React, {Component} from 'react';
import '../../css/footer.css';
import Facebook from '../../img/foot/Facebook.png';
import Instagram from '../../img/foot/Instagram.png';
import Youtube from '../../img/foot/YouTube.png';

import logo from '../../img/foot/logo.png';
import logo2 from '../../img/foot/logo2.png';
import line from '../../img/foot/Line.png'

//import {change} from './actions'


class footer1 extends Component {
    render () {
        return(
            <>
                <div className="footer">
                    <div className="introduction">
                        <img src={logo} alt="projectory"/>
                        <img src={line} alt="구분선"/>
                        <span className="intro-title">미래 세대를 위한 실험실<br/><span className="intro-detail">본 사이트는 NC문화재단이 운영하는 프로젝토리의 정식 사이트가 아님을 밝힙니다.</span></span>
                    </div>
                    <div className="wrap_site-link">
                        <div className="info">  바로가기</div>
                        <div className="site-link">
                            <span><a href="https://www.projectory.or.kr/main" target="_blank" rel="noopener noreferrer"><img src={logo2} alt="logo"/></a></span>
                            <span><a href="https://www.instagram.com/projectory_official/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Facebook"/></a></span>
                            <span><a href="https://www.facebook.com/ncsoftfoundation" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Instagram"/></a></span>
                            <span><a href="https://www.youtube.com/channel/UCrmV7fabwU59QR1YUsg4I5g" target="_blank" rel="noopener noreferrer"><img src={Youtube} alt="Youtube"/></a></span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default footer1