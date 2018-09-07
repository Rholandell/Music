import React, { Component } from 'react'
class Friend extends Component {
render() {
    return (
    <div>
      <section> 
       <div className="UP">精彩别错过 〉
           <ul className="up-list">
               {/* <!-- 一个li的宽度为202 --> */}
               <li className="up-item">
                   <div className="up-o"></div>
                   <img alt=""  src={require("../../img/content-pic/touxiang1.jpg")} className="up-hp"/>
                   <img alt=""  src={require("../../img/content-pic/sicon1.png")} className="up-sicon"/>
                   <span className="up-name">ElvinsJ</span>
               </li>
               <li className="up-item">
                    <div className="up-o"></div>
                    <img alt=""  src={require("../../img/content-pic/touxiang2.jpg")} className="up-hp"/>
                    <img alt=""  src={require("../../img/content-pic/sicon1.png")} className="up-sicon"/>
                    <span className="up-name">by 账号已注销</span>
               </li>
               <li className="up-item">
                    <div className="up-o"></div>
                    <img alt=""  src={require("../../img/content-pic/touxiang3.jpg")} className="up-hp"/>
                    <img alt=""  src={require("../../img/content-pic/sicon1.png")} className="up-sicon"/>
                    <span className="up-name">ElvinsJ</span>
               </li>
               <li className="up-item">
                    <div className="up-o"></div>
                    <img alt=""  src={require("../../img/content-pic/touxiang4.jpg")} className="up-hp"/>
                    <img alt=""  src={require("../../img/content-pic/sicon2.png")} className="up-sicon"/>
                    <span className="up-name">ElvinsJ</span>
               </li>
               <li className="up-item">
                    <div className="up-o"></div>
                    <img alt=""  src={require("../../img/content-pic/touxiang5.jpg")} className="up-hp"/>
                    <img alt=""  src={require("../../img/content-pic/sicon1.png")} className="up-sicon"/>
                    <span className="up-name">ElvinsJ</span>
               </li>
           </ul>
           <div className="lk"></div>
       </div> 
       {/* <!-- 动态 --> */}
       <div className="friend-dongtai">
           <img alt=""  src={require("../../img/content-pic/img.jpg")} className="dongtai-hp"/>
           <div className="dongtai-content">
               {/* <!-- 发布者与时间 --> */}
               <div className="dongtai-content-top">
                    <div className="dongtai-nameAndTime">
                            <span className="dongtai-name">
                                <a href="">凋零灬雪月</a>
                             分享单曲</span>
                             <span className="dongtai-time">5月30日</span>
                        </div>
                        <div className="dongtai-attention"></div>
               </div>
               {/* <!-- 内容与图片 --> */}
               <div className="dongtai-content-text">娇梅千万，只折一枝怜，声优三千，只听一首曲!愿南酱的膝盖可以康复！</div>
               <ul className="dongtai-content-pic">
                   <li>
                       <img alt=""  src={require("../../img/friend-pic/1.jpg")} className="dongtai-content-pics"/>
                   </li>
                   <li>
                        <img alt=""  src={require("../../img/friend-pic/2.jpg")} className="dongtai-content-pics"/>
                   </li>
                   <li>
                        <img alt=""  src={require("../../img/friend-pic/3.jpg")} className="dongtai-content-pics"/>
                   </li>
                   <li>
                        <img alt=""  src={require("../../img/friend-pic/4.png")} className="dongtai-content-pics"/>
                   </li>
                   <li>
                        <img alt=""  src={require("../../img/friend-pic/5.jpg")} className="dongtai-content-pics"/>
                   </li>
               </ul>
               {/* <!-- 插入音乐 --> */}
               <div className="medium-music">
                   <img alt=""  src={require("../../img/friend-pic/1.jpg")} className="medium-music-pic"/>>
                   <ul className="medium-music-text">
                        <li className="medium-music-tiele">雪の華</li>
                        <li className="medium-music-name">南條愛乃</li>
                   </ul>
               </div>
               {/* <!-- 签名 --> */}
               <div className="signature">——请随我突破次元壁深入声优们的小日常</div>
               {/* <!-- 点赞，评论，分享 --> */}
               <div className="dongtai-btn">
                   <div className="dongtai-btns dongtai-support">862</div>
                   <div className="dongtai-btns dongtai-comment">150</div>
                   <div className="dongtai-btns dongtai-share">27</div>
                   <div className="dongtai-option"></div>
               </div>
           </div>
       </div>
       <div className="friend-dongtai">
            <img alt=""  src={require("../../img/content-pic/img.jpg")} className="dongtai-hp"/>
            <div className="dongtai-content">
                {/* <!-- 发布者与时间 --> */}
                <div className="dongtai-content-top">
                     <div className="dongtai-nameAndTime">
                             <span className="dongtai-name">
                                 <a href="">凋零灬雪月</a>
                              分享单曲</span>
                              <span className="dongtai-time">5月30日</span>
                         </div>
                         <div className="dongtai-attention"></div>
                </div>
                {/* <!-- 内容与图片 --> */}
                <div className="dongtai-content-text">娇梅千万，只折一枝怜，声优三千，只听一首曲!愿南酱的膝盖可以康复！</div>
                <ul className="dongtai-content-pic">
                    <li>
                        <img alt=""  src={require("../../img/friend-pic/1.jpg")} className="dongtai-content-pics"/>
                    </li>
                    <li>
                         <img alt=""  src={require("../../img/friend-pic/2.jpg")} className="dongtai-content-pics"/>
                    </li>
                    <li>
                         <img alt=""  src={require("../../img/friend-pic/3.jpg")} className="dongtai-content-pics"/>
                    </li>
                    <li>
                         <img alt=""  src={require("../../img/friend-pic/4.png")} className="dongtai-content-pics"/>
                    </li>
                    <li>
                         <img alt=""  src={require("../../img/friend-pic/5.jpg")} className="dongtai-content-pics"/>
                    </li>
                </ul>
                {/* <!-- 插入音乐 --> */}
                <div className="medium-music">
                    <img alt=""  src={require("../../img/friend-pic/1.jpg")} className="medium-music-pic"/>
                    <ul className="medium-music-text">
                         <li className="medium-music-tiele">雪の華</li>
                         <li className="medium-music-name">南條愛乃</li>
                    </ul>
                </div>
                {/* <!-- 签名 --> */}
                <div className="signature">——请随我突破次元壁深入声优们的小日常</div>
                {/* <!-- 点赞，评论，分享 --> */}
                <div className="dongtai-btn">
                    <div className="dongtai-btns dongtai-support">862</div>
                    <div className="dongtai-btns dongtai-comment">150</div>
                    <div className="dongtai-btns dongtai-share">27</div>
                    <div className="dongtai-option"></div>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}
};
export default Friend