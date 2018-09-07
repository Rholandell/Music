import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import { getSongMp3 } from '../../sever/searchMp3'
import classnames from 'classnames'
import Player from './player/player'
class Bottom extends Component {
constructor(props) {
    super(props);
    this.state = {
        duration: 1,
        currentTime:0,
        a:0,
        b:0,
        isShowPlayer: false,  //组件是否显示
        index: 0,  // 记录当前播放到哪一首歌曲
        isPlay: true,  // 记录歌曲是否在播放
        playInfo: {
            album_img : ''
        },
        songList:[],
        tipsShow:false
    };

    this.audio = React.createRef();
    }
    //拿歌曲的方法
    getSongInfoMethodByHash = (hash,songList) => {
    if(songList){
        let index = songList.findIndex(item => item.hash === hash);
        if (hash) {
            getSongMp3({ hash }).then(({ data }) => {
            this.setState({
                playInfo: data,
                index: index,
                isPlay: true
            })
            })
        }
    }else{
        let index = this.props.songList.findIndex(item => item.hash === hash);
        if (hash) {
            getSongMp3({ hash }).then(({ data }) => {
            this.setState({
                playInfo: data,
                index: index,
                isPlay: true
            })
            })
        }
    }
    }

    upDateTiem =(time,name) => {
        function addZero(n){
            return n < 10 ? '0'+n : n;	
        }
    
        var m = addZero(parseInt(time/60));
        var s = addZero(parseInt(time%60));
        
        
        
        this.setState({
            [name] : m + ":" + s
        }) 
    }
    // 只有外界出给你的props更新了，就会触发，组件内部状态变了，不触发
    componentWillReceiveProps(nextProps) { 
        let { hash,songList } = nextProps;
        this.getSongInfoMethodByHash(hash,songList)
        
        this.setState({
            songList:songList
        })
        console.log(songList)
    }

    //隐藏
    isShowPlayer = () => {
        this.setState({
            isShowPlayer : false
        })
    }

    // 播放或暂停
    playOrPause =() => {
        let audio = this.audio.current;
        if (audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
        this.setState({
            isPlay: !this.state.isPlay
        })
    }

    //下一首歌
    nextSong = () => {
        let index = this.state.index
        index ++
        if(index > this.props.songList.length - 1){
            index = 0;
        }
        console.log(index)
        let hash = this.props.songList[index].hash
        this.getSongInfoMethodByHash(hash)
    }

    // 上一首
    prevSong = () => {
        let index = this.state.index;
        index--;
        if (index < 0) {
        index = this.props.songList.length - 1;
        }
        // 下一首歌曲的hash
        let hash = this.props.songList[index].hash;
        this.getSongInfoMethodByHash(hash)
    }

    //开始播放,并且转换时间
    onLoadedMetadata = () => {
        
        var duration = this.audio.current.duration
        var a = duration
        this.upDateTiem(duration,'duration')
        this.setState({
            a : a
        }) 
    }

    ontimeupdate = () => {
        var currentTime = this.audio.current.currentTime
        var b = currentTime
        this.upDateTiem(currentTime,'currentTime')
        this.setState({
            b : b
        })
    }

    // 在子级的子级中控制currentTime
    uodateCurrentTime = (t) => {
        this.setState({
        currentTime: t
        })
        this.audio.current.currentTime = t;
    }

    getHash=(hash)=>{
        console.log(1,hash)
        this.props.dispatch({ type: 'updateHash', hash: hash })
        this.props.dispatch({ type: 'updateSongList', songList: this.state.songList})
    }
    
render() {
    var { playInfo} = this.state;
    if(playInfo.album_img){
        var imgurl = playInfo.album_img.replace(/{size}/,'')
    }else if(playInfo.imgUrl){
        var imgurl = playInfo.imgUrl.replace(/{size}/,'')
    }
   
    return this.props.hash ? ReactDOM.createPortal(
    <div>
        <footer>
        
        <div className="player">
        {
            this.state.tipsShow
            ?<ul className="playlist">
            {this.state.songList.map((item,index) =>{
                    return(
                        <li key={index} className="details-item-music"
                            onClick={()=>{
                                return this.getHash(item.hash)
                            }}
                        >
                            <div className="details-item-num">{index+1}</div>
                                <div className="details-item-musicNameAndNickName">
                                    <span className="details-item-musicName">{item.filename}</span>
                                    <span className="details-item-NickName">
                                    {item.remark}</span>
                                </div>
                        </li>
                    )
                })}
            </ul>
            :null
        }
       
            <audio 
                autoPlay
                ref={this.audio} 
                autoPlay src={playInfo.url}
                //自动播放下一首
                onEnded={this.nextSong}
                //开始播放后
                onLoadedMetadata={this.onLoadedMetadata}
                //时间更新了
                onTimeUpdate={this.ontimeupdate}
            ></audio>
            <div className="playerL">
                <img alt=""
                // 显示页面，禁止页面滚动
                onClick={() => {
                this.setState({
                    isShowPlayer: true
                 })
                }} 
                src={imgurl}/>
                <div className="font-box">
                    <span className="music-name">{playInfo.songName}</span>
                    <span className="singer-lyrics">{playInfo.choricSinger}</span>
                </div>
            </div>
            <div className="playerR">
                <div
                className={classnames({
                    'play-song': true,
                    'playbtn': !this.state.isPlay,
                    'pausebtn': this.state.isPlay
                  })}
                    onClick={this.playOrPause}
                ></div>
                <div
                    onClick={()=>{
                        if(this.state.tipsShow){
                            this.setState({
                                tipsShow:false
                            })
                        }else{
                            this.setState({
                                tipsShow:true
                            })
                        }
                        
                    }}
                className="footer-list"></div>
            </div>
        </div>
    </footer>
    {
        this.state.isShowPlayer 
        ? <Player 
            playOrPause={this.playOrPause} 
            isPlay={this.state.isPlay}
            nextSong={this.nextSong}
            prevSong={this.prevSong}
            isShowPlayer={this.isShowPlayer}
            playInfo={playInfo}
            duration={this.state.duration}
            currentTime={this.state.currentTime}
            uodateCurrentTime={this.uodateCurrentTime}
            a={this.state.a}
            b={this.state.b}
            audio={this.audio.current}
        /> 
        : null
    }
    </div>
    
    ,document.body) : null;
}
};

function mapStateToprops(state) {
    return {
      hash: state.hash,
      songList: state.songList
    }
  }
  
export default connect(mapStateToprops)(Bottom);
  