import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { getPlistInfo} from '../../sever/plist'
import DetailsMiusc from './detailsmiusc'
import {Icon} from 'antd-mobile'
import {connect} from 'react-redux'
class SongShan extends Component {
    
    componentDidMount() {
        let ctx = this;
        window.onscroll = function(){
            if( window.pageYOffset  > 228)
            {
                ctx.setState({
                    open:true,
                })
            }
            if( window.pageYOffset  < 228)
            {
                ctx.setState({
                    open:false,
                })
            }
        }
        getPlistInfo({ id: this.props.match.params.id}).then(({data}) => {
            this.setState({
                data : data,
                loading:false
            })
        })
    }
    componentWillUnmount(){
        window.onscroll =  null;
    }
    //收藏
    collection(){
        if(!this.state.iscollection){
            this.setState({
                collection:"已收藏 ",
                iscollection:true
            })
        }else{
            this.setState({
                collection:"+ 收藏 ",
                iscollection:false
            })
        }
        
    }
    constructor(props){
        super(props)
        this.state={
            data:{
            info:{
                list:{
                    imgurl:'',
                    tags:[{tagname:""}]
                },
                
            },
            list:{
                list:{
                    info:[]
                }
            }
            },
            open : false,
            num:0,
            loading:true,
            collection:"+ 收藏 ",
            iscollection:false,
            tipsShow:false,
            mo:function(e){e.preventDefault()}
        }
    }
    tipsShow(){
        this.setState({
            tipsShow:true
        })
    }
    stopMove(){
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",this.state.mo,{
            passive:false
        });//禁止页面滑动
    }
    tipsClose(){
        this.setState({
            tipsShow:false
        })
    }
    canMove = () => {
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",this.state.mo,false);
      }
render() {
    var data = this.state.data.list.list.info
    var dataInfo = this.state.data.info.list
    var imgurl = this.state.data.info.list.imgurl.replace(/{size}/,'')
    let MiuscsRender = data.map((item,index)=>{
        return (
             <DetailsMiusc 
                {...{
                    data:data,
                    key:index,
                    hash:item.hash,
                    filename:item.filename,
                    num:index
                }}
            />) 
    }) 
    
    return (
        this.state.loading 
            ? <div id="icon"><Icon type="loading"></Icon> </div>
            : <div>
        {/* <!-- 详情页头部 --> */}
    <header className="index-head list-headbox">
        {/* <!-- 拖拽页面的高度小于228，className加上details-backRgba并且让下面img启用 --> */}
        <div className={this.state.open?"headbox list-headbox details-backRgba":"headbox list-headbox"}>
            <nav className="base-nav">
                 <Link to="/">
                    <div className="base-backbox"></div>
                </Link>
                <div className="base-back-text">
                    <span className="base-back-text1">歌单</span>
                    <span className="base-back-text2">根据你喜欢的“{dataInfo.tagname?dataInfo.tagname:dataInfo.tags[0].tagname}”类型推荐</span>
                </div>
            </nav>
            {
                this.state.open? <img alt="" src={require("../../img/menu-pic/back.jpg")} className="details-back pb" /> : null
            }
        </div>
    </header>
    {/* <!-- 详情页内容 --> */}
      <section className="details-section">
        <div className="details-top-content">
            <img alt=""  src={imgurl} className="details-back ptl"/>
            <div className="details-top-content-box">
                <div className="details-top-content-box-top">
                <img 
                    alt=""
                    className="details-poster" 
                    src={imgurl}
                />
                    <div className="details-title-name">
                        <span className="details-title">{dataInfo.specialname}</span>
                        <span className="details-namebox">
                            <img alt=""  src={require("../../img/content-pic/img.jpg")} className="details-HP"/>
                            <span className="details-name"> {dataInfo.nickname} 〉</span>
                        </span>
                    </div>
                </div>
                <ul className="details-top-content-box-bottom">
                    <li 
                        onClick={()=>{
                            this.tipsShow()
                            this.stopMove()
                        }}
                    className="details-btn message">656</li>
                    <li 
                        onClick={()=>{
                            this.tipsShow()
                            this.stopMove()
                        }} 
                        className="details-btn share">939</li>
                    <li 
                        onClick={()=>{
                            this.tipsShow()
                            this.stopMove()
                        }} 
                        className="details-btn download">下载</li>
                    <li 
                        onClick={()=>{
                            this.tipsShow()
                            this.stopMove()
                        }} 
                        className="details-btn choose">多选</li>
                </ul>
            </div>
            
            
        </div>
        <div className="playAndCollection">
            <div className="playAll"
                onClick={() => { 
                    this.props.dispatch({ type: 'updateHash', hash: data[0].hash })
                    this.props.dispatch({ type: 'updateSongList', songList: data})
                }}
            >
                    播放全部<span>(共{data.length}首)</span>
            </div>
            <div className="collection"
                onClick={()=>{
                    this.collection()
                }}
            >{this.state.collection}(15.7万)</div>
        </div>
        <div className="details-bottom-content">
            {/* 歌单组件 */}
            <ul>
                {MiuscsRender}
            </ul>
        </div>
    </section>
    {
        this.state.tipsShow
        ?
        <div>
            
            <div className="tips">
                <div className="tipsname">需要下载客户端</div>
                <div className="ok"
                    onClick={()=>{
                        this.tipsClose()
                        this.canMove()
                    }}
                >马上去下载</div>
                <div
                    onClick={()=>{
                        this.tipsClose()
                        this.canMove()
                    }}
                className="no">取消</div>
            </div>
            <div className="menuBackground"></div>
        </div>
        :null
    }
    </div>
    )
}
};
export default connect()(SongShan)