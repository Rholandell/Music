import React, { Component } from 'react'
import {connect} from 'react-redux'
import jsonp from 'jsonp'
class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            data :[],
            value:'',
            mo:function(e){e.preventDefault()}
        }
    }
    //打字的时候获取搜索数据
    change= (e) => {
        jsonp('http://mobilecdn.kugou.com/api/v3/search/song',{
            param :`format=jsonp&keyword=${e.target.value}&page=1&pagesize=30&showtype=1&callback`
        },(err,data) => {
            if(err){
            console.log(err)
            }else{
                this.setState({
                    data:data.data.info.slice(0,5)
                })
            }
        })
    }
    //点击拿到歌曲hash
    getHash=(hash)=>{
        console.log(1,hash)
        this.props.dispatch({ type: 'updateHash', hash: hash })
        this.props.dispatch({ type: 'updateSongList', songList: this.state.data})
    }

    canMove = () => {
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",this.state.mo,false);
      }

      componentDidMount(){
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",this.state.mo,{
            passive:false
        });//禁止页面滑动
       }
render() {
    
    return (
    <div>
        <header className="headbox list-headbox details-back-red">
            <nav className="base-nav">
                <div className="base-backbox"
                    onClick={() => {
                        this.props.isShowPlayer();
                        this.canMove()
                    }} 
                ></div>
                <input 
                    ref="searchVal" 
                    type="text" 
                    className="search-input" 
                    placeholder="搜索音乐"
                    onInput={this.change}
                />
            </nav>
        </header>
        <ul className="search-list">
            {this.state.data.map((item,index) =>{
                return(
                    <li key={index} className="details-item-music"
                        onClick={()=>{
                            return this.getHash(item.hash)
                        }}
                    >
                        <div className="details-item-num">{index+1}</div>
                            <div className="details-item-musicNameAndNickName">
                                <span className="details-item-musicName">{item.songname}</span>
                                <span className="details-item-NickName">
                                {item.singername}</span>
                            </div>
                        <div className="details-item-options"></div>
                    </li>
                )
            })}
        </ul>
    </div>
    )
}
};
export default connect()(Search);