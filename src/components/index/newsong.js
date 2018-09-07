import React, { Component } from 'react'
import { getDataComponent} from '../getDataComponent'
import {connect} from 'react-redux'
class Newsong extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            playInfo:[],
            img:[
                {pic:require("../../img/play-pic/111.jpg")},
                {pic:require("../../img/play-pic/222.jpg")},
                {pic:require("../../img/play-pic/333.jpg")},
                {pic:require("../../img/play-pic/444.jpg")},
                {pic:require("../../img/play-pic/555.jpg")},
                {pic:require("../../img/play-pic/666.jpg")}
            ]
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
        this.setState({
            data:return_array,
        })
    }
render() {
    console.log(this.state.data)
        return (
            this.state.data.map((item,index)=>{
                return (
                    <div className="modules"
                        key={index}
                        onClick={() => { 
                            this.props.dispatch({ type: 'updateHash', hash: item.hash })
                            this.props.dispatch({ type: 'updateSongList', songList: this.state.data})
                        }}
                    >
                        <div className="imgbox">
                            <div className="ItemImg1"></div>
                            <img 
                                alt=""
                                ref="imgs"
                                src={
                                    this.state.img[index].pic
                                }
                            />
                            <div className="play-num">
                                <div className="sicon"></div>
                                <span className="pNum">{item.duration}</span>
                            </div>
                        </div>
                        <div className="modules-title">{item.filename}</div>
                    </div>
                )
            })
            
        )
}
};
export default connect()(getDataComponent('getNewSongs')(Newsong))