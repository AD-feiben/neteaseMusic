import Vue from 'vue'
import Router from 'vue-router'
// 导入组件
import home from '@/components/home/home.vue'
import list from '@/components/list/list.vue'
import friend from '@/components/friend/friend.vue'
import recommend from '@/components/home/recommend/recommend.vue'
import songList from '@/components/home/songList/songList.vue'
import station from '@/components/home/station/station.vue'
import ranking from '@/components/home/ranking/ranking.vue'
import dynamic from '@/components/friend/dynamic/dynamic.vue'
import nearby from '@/components/friend/nearby/nearby.vue'
import friends from '@/components/friend/friends/friends.vue'

Vue.use(Router)
// 路由实例化
export default new Router({
  linkActiveClass: 'active',
  history: true,
  routes: [{
    // 地址为 xxx/path 的时候
    // <router-view></router-view>
    // 里面显示的组件 component
    path: '/home',
    name: 'home',
    component: home,
    // 二级路由
    children: [{
      path: '',
      component: home
    }, {
      path: '/recommend',
      component: recommend
    }, {
      path: '/songList',
      component: songList
    }, {
      path: '/station',
      component: station
    }, {
      path: '/ranking',
      component: ranking
    }]
  }, {
    path: '/list',
    name: 'list',
    component: list
  }, {
    path: '/friend',
    name: 'friend',
    component: friend,
    children: [{
      path: '/dynamic',
      component: dynamic
    }, {
      path: '/nearby',
      component: nearby
    }, {
      path: '/friends',
      component: friends
    }]
  }]
})
