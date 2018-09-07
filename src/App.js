import React, { Component } from 'react';
//子组件
import Header from './components/header/header'
import Bottom from './components/bottom/bottom'
//路由
import Routes from './views/routes'
//安装的api
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import { Provider} from 'react-redux'
import reducers from './reducers/reducers'
import ReduxThunk from 'redux-thunk'
//css样式
import './css/index.css'
import './css/base.css'
import './css/list.css'
import './css/nav.css'
import './css/tools.css'
import './css/reset.css'
import './css/details.css'
import './css/friend.css'
import './css/playmusic.css'
import './css/radio-station.css'
import './css/user.css'
import './css/landing.css'

var num = 1/window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale='+ num +',user-scalable=no,minimum-scale='+ num +',maximum-scale='+  num +'">');
var width = document.documentElement.clientWidth;
document.documentElement.style.fontSize = width/25+'px';
let data = {
  hash: '',
  songList: []
}

let store = createStore(reducers,data,applyMiddleware(ReduxThunk));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Routes />
            <Bottom />
          </div>
          
        </Router>
      </Provider>
        
    );
  }
}

export default App;
