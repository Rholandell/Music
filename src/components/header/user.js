import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

class User extends Component {
    constructor(props){
        super(props)
        this.state={
            mo:function(e){e.preventDefault()}
        }
        this.menu = React.createRef()
    }
    componentDidMount(){
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",this.state.mo,{
            passive:false
        });//禁止页面滑动
        var that = this
        setTimeout(function(){
            that.menu.current.style.left=0
        },50)
       
       }
    canMove = () => {
       
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",this.state.mo,false);
      }
      

    render() {
        return (
            <div id="menudisplay">
            <div className="menuBackground"
                onClick={() => {
                    this.props.isUserShowPlayer();
                    this.canMove()
                }}
            ></div>
            <div className="menu" ref={this.menu} >
                <div className="menu-ui">
                    <img className="menu-HP" src={require("../../img/content-pic/img.jpg")} alt=""/>
                    <div className="menu-namebox">
                        <div className="menu-namebox-L">凋零灬雪月
                            <img className="diamond" src={require("../../img/menu-pic/diamond.png")} alt=""/>
                            <img className="lv" src={require("../../img/menu-pic/lv7.png")} alt=""/>
                        </div>
                        <div className="menu-sign-R">签到</div>
                    </div>
                </div>
                <ul className="set-item">
                    <li className="set-items">我的消息
                        <div className="news">11</div>
                    </li>
                    <li className="set-items">我的VIP
                        <span className="set-items-font">2018.06.07到期</span>
                    </li>
                    <li className="set-items">商城</li>
                    <li className="set-items">游戏推荐Beta</li>
                    <li className="set-items">在线听歌免流量</li>
                    <li className="set-items">我的好友</li>
                    <li className="set-items">附近的人
                            <span className="ball"></span>
                        <span className="set-items-man">网易云音乐为梦发声，赞助校园活动</span>
                        
                    </li>
                    <li className="set-items">个性换肤
                        <span className="set-items-font">官方红</span>
                    </li>
                    <li className="set-items">听歌识曲</li>
                    <li className="set-items">定时停止播放</li>
                    <li className="set-items">扫一扫</li>
                    <li className="set-items">音乐闹钟</li>
                    <li className="set-items">驾驶模式</li>
                    <li className="set-items">音乐云盘</li>
                    <li className="set-items">优惠券</li>
                </ul>
                <div className="menu-bottom">
                    <div className="menu-bottom-btn">夜间模式</div>
                    <div className="menu-bottom-btn">设置</div>
                    <div onClick={()=>{
                        this.canMove()
                        this.props.isUserShowPlayer();
                        this.props.history.push('/landing')
                        this.props.dispatch({ type: 'updateHash', hash: null })
                    }} className="menu-bottom-btn">退出</div>
                    
                </div>
            </div>
        </div>
        )
    }
};
export default  withRouter( connect() (User) )