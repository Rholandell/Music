import React, { Component } from 'react'
class List extends Component {
render() {
    return (
    <div>
     <section>
        <ul className="default-list">
            <li className="defaultLists">本地音乐
                <span className="defaultLists-num">(486)</span>
            </li>
            <li className="defaultLists">最近播放
                <span className="defaultLists-num">(100)</span>
            </li>
            <li className="defaultLists">下载管理
                <span className="defaultLists-num">(479)</span>
            </li>
            <li className="defaultLists">我的电台
                <span className="defaultLists-num">(0)</span>
            </li>
            <li className="defaultLists">我的收藏
                <span className="defaultLists-num">(1)</span>
            </li>
        </ul>

        <div className="create">﹀  创建的歌单(2)
            <img alt="" className="create-img" src={require("../../img/menu-pic/2-2.png")}/>
        </div>
        <ul className="create-list">
            <li className="create-item">
                <img alt="" className="create-item-pic" src={require("../../img/content-pic/img.jpg")}/>
                <div className="create-item-textbox">
                    <span className="create-item-text1">我喜欢的音乐</span>
                    <span className="create-item-text2">
                        <img alt="" className="create-item-icon" src={require("../../img/list-pic/1-9.png")}/>
                        386首，已下载384首</span>
                </div>
            </li>
            <li className="create-item">
                <img alt="" className="create-item-pic" src={require("../../img/content-pic/img.jpg")}/>
                <div className="create-item-textbox">
                    <span className="create-item-text1">国漫op/ed</span>
                    <span className="create-item-text2">
                        <img alt="" className="create-item-icon" src={require("../../img/list-pic/1-8.png")}/>
                        92首</span>
                </div>
                <a href="" className="create-item-pic-R-btn">
                    <img alt="" className="create-item-pic-R" src={require("../../img/list-pic/1-7.png")}/>
                </a>
            </li>
        </ul>

        <div className="create">﹀  收藏的歌单(2)
            <img alt="" className="create-img" src={require("../../img/menu-pic/2-2.png")}/>
        </div>
        <ul className="create-list">
            <li className="create-item">
                <img alt="" className="create-item-pic" src={require("../../img/content-pic/img.jpg")}/>
                <div className="create-item-textbox">
                    <span className="create-item-text1">我喜欢的音乐</span>
                    <span className="create-item-text2">
                        <img alt="" className="create-item-icon" src={require("../../img/list-pic/1-9.png")}/>
                        386首，已下载384首</span>
                </div>
            </li>
            <li className="create-item">
                <img alt="" className="create-item-pic" src={require("../../img/content-pic/img.jpg")}/>
                <div className="create-item-textbox">
                    <span className="create-item-text1">我喜欢的音乐</span>
                    <span className="create-item-text2">
                        <img alt="" className="create-item-icon" src={require("../../img/list-pic/1-8.png")}/>
                        386首，已下载384首</span>
                </div>
                <a href="" className="create-item-pic-R-btn">
                    <img alt="" className="create-item-pic-R" src={require("../../img/list-pic/1-7.png")}/>
                </a>
            </li>
        </ul>
    </section>
    </div>
    )
}
};
export default List