import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logofile from '../../img/logo/logo.png';
import select from '../../img/menu/select.png';
import '../../css/header.css';
import { TextField } from '@material-ui/core';


//import {change} from './actions'


class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            page_num:1
        };
    }
    
    render () {
        return(
                <header className="nav">
                    <div className="logo">
                        <img src={logofile} height="68" alt=""/>
                    </div>
                    <div className="page-type">
                        <img id="select" src={select}  alt="" style={{position:"absolute" , left:"0px", display:'flex-inline',zIndex:'1'}}/>
                        <ul className="af">                           
                            <li className="menu-list" id="yes" onClick={e=>{this.changeEffect(1);this.setState({page_num:1});}} onMouseOver={e=>this.changeEffect(1)} onMouseOut={e=>this.changeEffect(this.state.page_num)}>
                                <Link to={'/ncfound'}>
                                    <div className="link-a">
                                        메이킹
                                    </div>
                                </Link>
                            </li>
                            <li className="menu-list" id="" onClick={e=>{this.changeEffect(2);this.setState({page_num:2});}} onMouseOver={e=>this.changeEffect(2)} onMouseOut={e=>this.changeEffect(this.state.page_num)}>
                                    <Link to={'/draw'}>
                                        <div className="link-a">
                                            그림
                                        </div>
                                    </Link>
                            </li>
                            <li className="menu-list" id="" onClick={e=>{this.changeEffect(3);this.setState({page_num:3});}} onMouseOver={e=>this.changeEffect(3)} onMouseOut={e=>this.changeEffect(this.state.page_num)}>
                                <Link to={'/video'}>
                                    <div className="link-a">
                                        영상
                                    </div>
                                </Link>
                            </li>
                            <li className="menu-list" id="" onClick={e=>{this.changeEffect(4);this.setState({page_num:4});}} onMouseOver={e=>this.changeEffect(4)} onMouseOut={e=>this.changeEffect(this.state.page_num)}>
                                <Link to={'/letter'}>
                                    <div className="link-a">
                                        글
                                    </div>
                                </Link>
                            </li>
                            <li className="menu-list" id=""  onClick={e=>{this.changeEffect(5);this.setState({page_num:5});}} onMouseOver={e=>this.changeEffect(5)} onMouseOut={e=>this.changeEffect(this.state.page_num)}>
                                <Link to={'/music'}>
                                    <div className="link-a">
                                        음악
                                    </div>
                                </Link>
                            </li>
                            <li className="menu-list" id="" onClick={e=>{this.changeEffect(6); this.setState({page_num:6});}} onMouseOver={e=>this.changeEffect(6)} onMouseOut={e=>this.changeEffect(this.state.page_num)}>
                                <Link to={'/etc'}>
                                    <div className="link-a">
                                        기타
                                    </div>
                                </Link>
                            </li>     
                        </ul>
                    </div>
                    <div className="search">
                        <div className ="search_key">
                            <TextField id="outlined-basic" label="Search"/>
                        </div>
                    </div>
                </header>
        );
        
    }

    changeEffect = (num)=> {
        document.getElementById('yes').setAttribute('id','');
        var container = document.querySelector(".af");
        var matches = container.querySelectorAll("ul > li");
        matches[num-1].setAttribute('id','yes');
            //document.getElementById('select').style.transform=`translateX(${num108})`;
        document.getElementById('select').style.left=108*(num-1)+"px";
        
    }
}

export default Header;