import React, { Component } from 'react';
import {connect} from 'react-redux'

class Detailsmiusc extends Component {
    render() {
        let {hash,filename,num,data} = this.props
        filename = filename.split('-')
        return (
            // 点击传值播放歌曲
            <li className="details-item-music" >
                <div className="details-item-num">{num+1}</div>
                    <div  onClick={() => { 
                    this.props.dispatch({ type: 'updateHash', hash: hash })
                    this.props.dispatch({ type: 'updateSongList', songList: data})
                }} className="details-item-musicNameAndNickName">
                        <span className="details-item-musicName">{filename[1]}</span>
                        <span className="details-item-NickName">
                        {filename[0]}</span>                 
                    </div>
                <div className="details-item-options"></div>
            </li>
        )
    }
};
export default  connect()(Detailsmiusc)