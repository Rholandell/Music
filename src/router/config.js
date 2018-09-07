import Index from '../components/index'
import List from '../components/list/list'
import Friend from '../components/friend/friend'
import SongShan from '../components/index/songShan'
import landing from '../components/header/landing'

// 导航区域的配置
export let navConfig = [
  {
    path: '/',
    component: Index
  },
  {
    path:'/list',
    component: List
  },
  {
    path:'/friend',
    component: Friend
  },
  {
    path:'/songshan/:id',
    component: SongShan
  }
]
export let two = [
  {
    path:'/landing',
    component: landing
  }
]

export default [...navConfig, ...two]