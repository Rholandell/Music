import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Recommendation extends Component {
render() {
    let {specialname,playcount,imgurl,specialid} = this.props
    imgurl = imgurl.replace(/{size}/,'')
        return (
            <div className="modules">
                <Link to={'/SongShan/'+specialid}>
                    <div className="imgbox">
                        <div className="ItemImg1"></div>
                        <img 
                            alt=""
                            ref="imgs"
                            src={imgurl}
                        />
                        <div className="play-num">
                            <div className="sicon"></div>
                            <span className="pNum">{playcount}</span>
                        </div>
                    </div>
                    <div className="modules-title">{specialname}</div>
                </Link>
            </div>
        )
}
};
export default Recommendation