import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import {getRc} from '../../../sever/searchMp3'
class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
          minX:0,
          maxX: 0,
          l: 0,
          isMove: false,
          mo:function(e){e.preventDefault()},
          data:this.props.playInfo,
          geci:[],
          geci2:[]
        };
        this.circle = React.createRef()
        this.progress = React.createRef()
      }
      componentWillReceiveProps(nextProps){
        let { b,a } = nextProps;
        let l = b / a * this.state.maxX;
        
        if(!this.state.isMove){
          this.setState({
            l:l
          })
        }
      }
      componentWillUnmount(){
        this.props.audio.removeEventListener("timeupdate",this.geci)
      }
      componentDidMount() {
        this.setState({
          maxX: this.progress.current.clientWidth - this.circle.current.offsetWidth
        })
        
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",this.state.mo,{
            passive:false
        });//禁止页面滑动
        var hash = this.state.data.hash
        var keyword = this.state.data.songName
        if (hash&&keyword) {
            getRc({ hash, keyword}).then(({ data }) => {
            
            var lyrics = data.split("\n");//this.lrc代表歌词文件内容的引用
            var lrcObj = {};
            for(var i=0;i<lyrics.length;i++){
                var lyric = decodeURIComponent(lyrics[i]);
                var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
                var timeRegExpArr = lyric.match(timeReg);
                if(!timeRegExpArr)continue;
                var clause = lyric.replace(timeReg,'');
                for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
                    var t = timeRegExpArr[k];
                    var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                        sec = Number(String(t.match(/\:\d*/i)).slice(1));
                    var time = min * 60 + sec;
                    lrcObj[time] = clause;
                }
            }
            if(this.updater.isMounted(this)){
                this.setState({
                    geci:lrcObj
                })
            }
                this.props.audio.addEventListener("timeupdate",this.geci);
            })
        }
        
      }
      geci=()=>{     
        let obj = this.state.geci[Math.floor(this.props.b)];
        if(obj!=undefined){
            this.setState({
                geci2:obj
            })
        }
    }
      start = () => {
        this.setState({
          isMove: true
        })
      }
      move = (e) => {
        // 作用的手指的事件对象列表
        let react = this.progress.current.getBoundingClientRect().left;
        let l = e.changedTouches[0].pageX - react - this.circle.current.offsetWidth / 2
        
        if (l < this.state.minX) l = this.state.minX;
        if (l > this.state.maxX) l = this.state.maxX;
    
        this.setState({
          l:l
        })
    
      }
      end = () => {
        this.setState({
          isMove: false
        })
    
        if (this.props.uodateCurrentTime){
          let t = this.circle.current.offsetLeft / this.state.maxX * this.props.a;
          this.props.uodateCurrentTime(t)
        }
    
      }

      progressStart = (e) => {
        this.move(e);
        // setState更新是异步的，所以要在数据更新之后，在获取元素的left
        // 写在setState第二个参数的回调函数中
        this.setState({
          isMove: true
        },() => {
          if (this.props.uodateCurrentTime) {
            let t = this.circle.current.offsetLeft / this.state.maxX * this.props.a;
            this.props.uodateCurrentTime(t)
          }
        })
        
      }
      progressEnd = () => {
        this.setState({
          isMove: false
        })
      }
      canMove = () => {
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",this.state.mo,false);
      }
render() {
    var {playInfo,duration,currentTime} = this.props
    if(playInfo.album_img){
        var imgurl = playInfo.album_img.replace(/{size}/,'')
    }else if(playInfo.imgUrl){
        var imgurl = playInfo.imgUrl.replace(/{size}/,'')
    }
    return ReactDOM.createPortal(
    <div id="mask">
    <header className="index-head list-headbox">
        <div className="headbox list-headbox">
            <nav className="base-nav">
                    <div className="base-backbox"
                    // 可以滚动以及隐藏页面
                        onClick={() => {
                            this.props.isShowPlayer();
                            this.canMove()
                        }} 
                    ></div>
                <div className="base-back-text">
                    <span className="base-back-text1">
                    {playInfo.songName}
                    </span>
                    <span className="base-back-text2">
                    {playInfo.singerName}
                    </span>
                </div>
                <div className="user-nav-menu"></div>
            </nav>
        </div>
    </header>
    <div className="playmusic-backgrounds"></div>
    <img alt=""  src={imgurl} className="playmusic-background"/>
    <section className="playmusic-content">
        <div className="singing-arm-rgba"></div>
        <img alt=""  src={require("../../../img/play-pic/singing arm.png")} className="singing-arm"/>
        <div className="record-box">
            <img alt=""  src={imgurl} className="record-pic"/>
        </div>
        <div className="playmusic-top-btn">
        {/* 歌词 */}
            <p className="geci">{this.state.geci2}</p>
        </div>
    </section>
    <footer className="playmusic-bottom">
                <div>
                    <div className="playmusic-line">
                        <span ref="timeCurrent" className="playmusic-timeL">{currentTime}</span>
                        <div  className="playmusic-line1"
                            ref={this.progress}
                            onTouchStart={this.progressStart}
                            onTouchEnd={this.progressEnd}
                        >
                            <div ref="line" className="playmusic-line2" style={{ width: this.state.l + 'px' }}></div>
                            <div ref="Line2" className="playmusic-line3-box">
                                <div
                                    className="playmusic-line3"
                                    ref={this.circle}
                                    style={{left: this.state.l + 'px'}}
                                    onTouchStart={this.start}
                                    onTouchMove={this.move}
                                    onTouchEnd={this.end}
                                ></div>
                            </div>
                        </div>
                        <span ref="timeDuration" className="playmusic-timeR">{duration}</span>
                    </div>
                    <ul className="playmusic-bottom-btn">
                        <li 
                            className="playmusic-bottom-btns"
                            
                        ></li>
                        <li className="playmusic-bottom-btns"
                            onClick={this.props.prevSong}
                        ></li>
                        <li 
                            className={classnames({
                                'play-song': true,
                                'playmusic-bottom-btns': !this.props.isPlay,
                                'playmusic-bottom-btns1': this.props.isPlay
                              })}
                              onClick={this.props.playOrPause}
                        ></li>
                        <li className="playmusic-bottom-btns"
                            onClick={this.props.nextSong}
                        ></li>
                        <li className="playmusic-bottom-btns"></li>
                    </ul>
                </div>
            </footer>
    </div>,
    document.body
    )
}
};
export default Player