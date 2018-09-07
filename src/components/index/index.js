import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getDataComponent} from '../getDataComponent'
import SectionLB from "./lunbotu"
import Recommendation  from './recommendation'
import Newsong from "./newsong"
class App extends Component {
    constructor(props){
        super(props)
        this.state={
            data:this.props.data,
            arr : [],
            out:[],
            top:0,
            oldTouchTop:0,
            newTouchTop:0
        }
    }
    componentDidMount(){
       
        var arr = this.props.data.data
        var num = 6;
        

        
        var temp_array = new Array();
        for (var index in arr) {
            temp_array.push(arr[index]);
        }
        //取出的数值项,保存在此数组
        var return_array = new Array();
        for (var i = 0; i<num; i++) {
            //判断如果数组还有可以取出的元素,以防下标越界
            if (temp_array.length>0) {
                //在数组中产生一个随机索引
                var arrIndex = Math.floor(Math.random()*temp_array.length);
                //将此随机索引的对应的数组元素值复制出来
                return_array[i] = temp_array[arrIndex];
                //然后删掉此索引的数组元素,这时候temp_array变为新的数组
                temp_array.splice(arrIndex, 1);
            } else {
                //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
                break;
            }
        }
        console.log(return_array)
        this.setState({
            out:return_array
        })
    }
    TouchStart = (ev) => {
        let {top,oldTouchTop} = this.state
        top = this.refs.shuaxin.offsetTop
        oldTouchTop = ev.changedTouches[0].pageY
        this.setState({top})
        this.setState({oldTouchTop})
    }
    TouchMove = (ev) => {
        let {top,oldTouchTop,newTouchTop} = this.state
        newTouchTop = ev.changedTouches[0].pageY-oldTouchTop
        this.refs.shuaxin.style.position = "absolute"
        this.refs.shuaxin.style.top = (newTouchTop>300? 300:newTouchTop)+top+'px'
        this.setState({newTouchTop})
    }
    TouchEnd = (ev) => {
        let {top,newTouchTop} = this.state
        this.refs.shuaxin.style.position = "none"
        this.refs.shuaxin.style.top = 8.4+'rem'
        if(top<newTouchTop){
            this.setState({newTouchTop:0})
            var arr = this.props.data.data
            var num = 6;
            

            
            var temp_array = new Array();
            for (var index in arr) {
                temp_array.push(arr[index]);
            }
            //取出的数值项,保存在此数组
            var return_array = new Array();
            for (var i = 0; i<num; i++) {
                //判断如果数组还有可以取出的元素,以防下标越界
                if (temp_array.length>0) {
                    //在数组中产生一个随机索引
                    var arrIndex = Math.floor(Math.random()*temp_array.length);
                    //将此随机索引的对应的数组元素值复制出来
                    return_array[i] = temp_array[arrIndex];
                    //然后删掉此索引的数组元素,这时候temp_array变为新的数组
                    temp_array.splice(arrIndex, 1);
                } else {
                    //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
                    break;
                }
            }
            console.log(return_array)
            this.setState({
                out:return_array
            })
            }
        
    }
render() {
    
    
    let newModules = this.state.out.map((item,index)=>{
        return ( 
            <Recommendation {...{
                key:index,
                imgurl:item.imgurl,
                playcount:item.playcount,
                specialname:item.specialname,
                specialid:item.specialid
            }}
            />
        )
    })
    return (
    <div>
    <section
        ref="shuaxin" 
        id="indexContent"
        onTouchStart = {this.TouchStart.bind(this)}
        onTouchMove = {this.TouchMove.bind(this)}
        onTouchEnd = {this.TouchEnd.bind(this)}
    > 
        <div className="LB-BOX">
            <div className="lb-pic">
                <div className="lb-pic-box">
                    {/* 轮播图组件 */}
                    <SectionLB/>
                </div>
            </div>
        </div>

        {/* 推荐歌单组件 */}
        <div className="module">
            <span className="title">推荐歌单 〉</span>
            {newModules}
        </div>
        <div className="module">
            <span className="title vip-pic">会员专区 〉</span>
            <div className="modules">
                <div className="imgbox">
                    <img alt=""  src={require("../../img/content-pic/img.jpg")}/>
                </div>
                <div className="modules-title">
                    <div className="cf-box">单曲</div>
                    魔法料理：50%电音加上50%萌音！</div>
            </div>
            <div className="modules">
                <div className="imgbox">
                    <img alt=""  src={require("../../img/content-pic/img.jpg")}/>
                </div>
                <div className="modules-title">
                        <div className="cf-box">专辑</div>
                        魔法料理：50%电音加上50%萌音！</div>
            </div>
            <div className="modules">
                <div className="imgbox">
                    <img alt=""  src={require("../../img/content-pic/img.jpg")}/>
                </div>
                <div className="modules-title">
                    <div className="cf-box">电台</div>
                    魔法料理：50%电音加上50%萌音！</div>
            </div>
        </div>
        <div className="guanggao">
            <a href="">豪华会员年卡 | 0元，就现在</a>
        </div>
        <div className="module">
            <span className="title">最新音乐 〉</span>

            {/* 新歌 */}
            <Newsong/>
        </div>
        <div className="module">
            <span className="title">主播电台 〉</span>
            <div className="modules">
                <div className="imgbox">
                    <img alt=""  src={require("../../img/content-pic/img.jpg")}/>
                    <div className="xfc">付费精品</div>
                    <div className="zhubo Bshadow">Bili音乐集合站(^∇^)</div>
                </div>
                <div className="modules-title">魔法料理：50%电音加上50%萌音！</div>
            </div>
            <div className="modules">
                <div className="imgbox">
                    <img alt=""  src={require("../../img/content-pic/img.jpg")}/>
                    <div className="zhubo Bshadow">Bili音乐集合站(^∇^)</div>
                </div>
                <div className="modules-title">魔法料理：50%电音加上50%萌音！</div>
            </div>
            <div className="modules">
                <div className="imgbox">
                    <img alt=""  src={require("../../img/content-pic/img.jpg")}/>
                    <div className="xfc">付费精品</div>
                    <div className="zhubo Bshadow">Bili音乐集合站(^∇^)</div>
                </div>
                <div className="modules-title">魔法料理：50%电音加上50%萌音！</div>
            </div>
            <div className="modules">
                <div className="imgbox">
                    <img alt=""  src={require("../../img/content-pic/img.jpg")}/>
                    <div className="zhubo Bshadow">Bili音乐集合站(^∇^)</div>
                </div>
                <div className="modules-title">魔法料理：50%电音加上50%萌音！</div>
            </div>
            <div className="modules">
                <div className="imgbox">
                    <img alt=""  src={require("../../img/content-pic/img.jpg")}/>
                    <div className="zhubo Bshadow">Bili音乐集合站(^∇^)</div>
                </div>
                <div className="modules-title">魔法料理：50%电音加上50%萌音！</div>
            </div>
            <div className="modules">
                <div className="imgbox">
                    <img alt=""  src={require("../../img/content-pic/img.jpg")}/>
                    <div className="zhubo Bshadow">Bili音乐集合站(^∇^)</div>
                </div>
                <div className="modules-title">魔法料理：50%电音加上50%萌音！</div>
            </div>
        </div>
        <div className="module1">
            <img alt="" className="module1-img" src={require("../../img/content-pic/img.jpg")}/>
            <div className="module1-content">
                <div className="m-c-top">
                    <div className="cf-box margin11">视频</div>【街头快闪】土耳其进行曲，大街瞬间充满欢乐
                    <div className="play-comment">
                        <div className="module1-playNum">69035</div>
                        <div className="module1-commentNum">88</div>
                    </div>
                </div>
                <div className="m-c-bottom">
                    <img alt="" className="m-c-HP" src={require("../../img/content-pic/img.jpg")}/>
                    <img alt="" className="m-c-icons" src={require("../../img/content-pic/img.jpg")}/>
                    <span className="m-c-name">m天使vs恶魔m</span>
                    <div className="X">╳</div>
                </div>
            </div>
        </div>
        <div className="module1">
            <img alt="" className="module1-img" src={require("../../img/content-pic/img.jpg")}/>
            <div className="module1-content">
                <div className="m-c-top">
                    <div className="cf-box margin11">视频</div>【街头快闪】土耳其进行曲，大街瞬间充满欢乐
                    <div className="play-comment">
                        <div className="module1-playNum">69035</div>
                        <div className="module1-commentNum">88</div></div>
                    </div>
                <div className="m-c-bottom">
                    <img alt="" className="m-c-HP" src={require("../../img/content-pic/img.jpg")}/>
                    <img alt="" className="m-c-icons" src={require("../../img/content-pic/img.jpg")}/>
                    <span className="m-c-name">m天使vs恶魔m</span>
                    <div className="X">╳</div>
                </div>
            </div>
        </div>
        <div className="module1">
            <img alt="" className="module1-img" src={require("../../img/content-pic/img.jpg")}/>
            <div className="module1-content">
                <div className="m-c-top">
                    <div className="cf-box margin11">视频</div>【街头快闪】土耳其进行曲，大街瞬间充满欢乐
                    <div className="play-comment">
                        <div className="module1-playNum">69035</div>
                        <div className="module1-commentNum">88</div></div>
                    </div>
                <div className="m-c-bottom">
                    <img alt="" className="m-c-HP" src={require("../../img/content-pic/img.jpg")}/>
                    <span className="m-c-name">m天使vs恶魔m</span>
                    <div className="X">╳</div>
                </div>
            </div>
        </div>
    </section>
    
    </div>
    )
}
};
export default withRouter(getDataComponent('getPlist')(App))