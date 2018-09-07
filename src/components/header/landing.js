import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Landing extends Component {
    constructor(props){
        super(props)
        this.state={
            onoff:false
        }
    }
    landing=()=>{
        let username = localStorage.getItem('userval')
        let code = localStorage.getItem('codeval')
        let L1 = this.refs.LandingUsername.value
        let L2 = this.refs.LandingCode.value
        let {history} = this.props
        if(L1 === username&&L2===code){
            history.push('/')
        }
    }
    click=()=>{
        let L = window.innerWidth
        this.refs.Landing.style.left = -L+'px';
    }
    back=()=>{
        let userVal = this.refs.userName.value
        let codeVal = this.refs.code.value
        if(!userVal&&!codeVal){
            return
        }else{
            localStorage.setItem('userval',userVal)
            localStorage.setItem('codeval',codeVal)
            this.refs.Landing.style.left ='0px';
        }
        
    }
    eye=()=>{
        let {onoff} = this.state
        if(!onoff){
            this.refs.eye.className = 'eye2'
            this.refs.LandingCode.type = 'password'
            this.setState({onoff:true})
        }else{
            this.refs.eye.className = 'eye1'
            this.refs.LandingCode.type = 'text'
            this.setState({onoff:false})
        }
    }
    render() {
        return (
            <div className="Landingbox">
                <div ref="Landing" className="Landingbox1">
                    {/* 登录 */}
                    <div className="Landing">
                        <img className="Landing-title" src={require("../../img/Logo.png")} alt="" />
                        <div>
                            <input ref="LandingUsername" className="Landing-text" type="text" placeholder="用户名"/>
                        </div>
                        <div>
                            <div className="Landing-codebox">
                                <i 
                                    ref="eye"
                                    className="eye1"
                                    onClick={this.eye}
                                ></i>
                                <input ref="LandingCode" className="Landing-text" type="text" placeholder="密码"/>
                            </div>
                        </div>
                        <div className="Landing-btnBox">
                            <button
                                className="Landing-btn"
                                onClick={this.landing}
                            >登录</button>
                            <button 
                                className="Landing-btn"
                                onClick={this.click}
                            >注册</button>
                        </div>
                    </div>
                    {/* 注册 */}
                    <div className="registered">
                        <img className="Landing-title" src={require("../../img/Logo.png")} alt="" />
                        <div>
                            <input ref="userName" className="Landing-text" type="text" placeholder="用户名"/>
                        </div>
                        <div className="Landing-codebox">
                            <input ref="code" className="Landing-text" type="text" placeholder="密码"/>
                        </div>
                        <div className="Landing-btnBox1">
                            <button 
                                className="Landing-btn"
                                onClick={this.back}
                            >确认注册</button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default withRouter(Landing)