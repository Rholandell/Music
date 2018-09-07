import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { navConfig } from '../../router/config'
import Search from './search'
import User from './user'
class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            isShowPlayer : false,
            isUserShowPlayer:false,
        }
    }
    isShowPlayer=()=>{
        this.setState({
            isShowPlayer : false
        })
    }
    isUserShowPlayer=()=>{
        this.setState({
            isUserShowPlayer : false
        })
    }
    
render() {
    let item = !!navConfig.find(item => this.props.location.pathname === item.path);
    return (
    <div>
        { item ?
            <header className="index-head">
            <div className="headbox details-back-red">
                <nav className="base-nav  details-back-red">
                    <div className="base-menubox">
                        <div className="baseL156"
                            onClick={() => {
                                this.setState({
                                    isUserShowPlayer: true
                                 })
                                }} 
                        >
                                <div className="baseNum">11</div>
                                <div className="baseX"></div>
                                <div className="baseX"></div>
                                <div className="baseX"></div>
                        </div>
                        <div className="base-menu"></div>
                    </div>
                    
                        {/* 跳转页面 */}
                    <div onClick={()=>{
                        this.props.history.push('/list')
                        // 'base native'
                    }} className={this.props.location.pathname === '/list' ? 'base native2' : 'base native' }></div>
                    
                    <div onClick={()=>{
                        this.props.history.push('/')
                        // 'base home'
                    }} className={this.props.location.pathname === '/' ? 'base home2' : 'base home' }></div>
    
                    <div onClick={()=>{
                        this.props.history.push('/friend')
                        // 'base expand'
                    }} className={this.props.location.pathname === '/friend' ? 'base expand2' : 'base expand' }></div>
    
                    <div className="base search"
                        onClick={() => {
                            this.setState({
                                isShowPlayer: true
                             })
                            }} 
                    ></div>
    
                </nav>
                {
                    this.state.isShowPlayer?
                    <Search 
                    isShowPlayer={this.isShowPlayer}
                    />
                    :null
                }
                {
                    this.state.isUserShowPlayer?
                    <User
                    isUserShowPlayer={this.isUserShowPlayer}
                    />
                    :null
                }
            </div>
        </header>
            : null}
       
    </div>
    )
}
};
export default withRouter(Header);