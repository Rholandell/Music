import React, { Component } from 'react'
import { getDataComponent} from '../getDataComponent'

// import * as actionCreators from '../../action';


class SectionLB extends Component {
    constructor(porps){
        super(porps)
        this.state={
            lb:[
                {id:1,lbpic:require("../../img/ntan.jpg")},
                {id:2,lbpic:require("../../img/df.jpg")},
                {id:3,lbpic:require("../../img/lswl.png")},
                {id:4,lbpic:require("../../img/ysn.jpg")},
                {id:5,lbpic:require("../../img/xm.jpeg")},
                {id:6,lbpic:require("../../img/syx.jpg")},
                {id:7,lbpic:require("../../img/lovelive.jpeg")},
                {id:8,lbpic:require("../../img/k-on.jpg")}
            ],
            oldX: 0,
            x: 0,
            picX:0,
            num:0,
            banner:[]
        }
    }
    touchstart = (ev) => {
        let {picX,num}=this.state
        let {data} = this.props
        let oldX = ev.changedTouches[0].pageX
        this.refs.PicBox.style.transition = 'none'
        this.setState({oldX})
        if(num === 0){
            this.refs.PicBox.style.left = -(document.body.clientWidth*4)+'px'
            picX = -(document.body.clientWidth*4)
            this.setState({picX})
        }else if(num === (data.banner.length/2)-1){
            this.refs.PicBox.style.left = -(document.body.clientWidth*3)+'px'
            picX = -(document.body.clientWidth*3)
            this.setState({picX})
        }
    }
    touchmove = (ev) => {
        let newX = ev.changedTouches[0].pageX
        let {oldX,picX}=this.state
        let x = newX - oldX
        this.refs.PicBox.style.left = picX+x+'px'
        this.setState({x})
    }
    touchend = (ev) => {
        let {x,picX,num,lb}=this.state
        this.refs.PicBox.style.transition = ".5s";
        if(x<0){
            //从右往左滑动
            picX = picX-window.innerWidth 
            this.refs.PicBox.style.left = picX+'px'
            num = Math.abs(picX/window.innerWidth)%(lb.length/2)
        }else if(x>0){
            //从左往右滑动
            picX = picX+window.innerWidth 
            this.refs.PicBox.style.left = picX+'px'
            num = Math.abs(picX/window.innerWidth)%lb.length
        }
        x=0
        this.setState({x})
        this.setState({picX})
        this.setState({num})
    }
    componentDidMount(){
        let {data} = this.props
        console.log(data.banner)
        let indexImg = data.banner
        if(indexImg&&indexImg.length<8){
            indexImg.push(...data.banner)
            var banner = indexImg
            this.setState({banner})
        }
    }

    render() {
        let {num,banner} = this.state
        let lbPic
        let btnbox = []
        if(this.state.banner){
            lbPic = this.state.banner.map((e,i)=>{
                return (<img
                        key={i}
                        src={e.imgurl}
                        alt=""
                        />)
            })
        }
        if(banner){
            let n = num%4
            for(let i=0;i<banner.length/2;i++){
                btnbox.push(<li
                    key={i}
                    className={i === n?"pic-btns active":"pic-btns"}
                    ></li>)
            }
        }
        return (
            <div className="LB-BOX">
                <div className="lb-pic">
                    <div 
                        ref = "PicBox"
                        className="lb-pic-box"
                        onTouchStart = {this.touchstart}
                        onTouchMove = {this.touchmove}
                        onTouchEnd = {this.touchend}
                    >
                        {lbPic}
                    </div>
                    <ul className="pic-btnbox">
                        {btnbox}
                    </ul>
                </div>
            </div>
        )
    }
}

export default getDataComponent('getNewSongs')(SectionLB)


// export default connect((state)=>{
//     return {data:state.reducer1}
// },(dispatch)=>bindActionCreators(actionCreators,dispatch))(SectionLB);