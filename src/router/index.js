import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import list from '@/components/list/list.vue'
import friend from '@/components/friend/friend.vue'
import recommend from '@/components/home/recommend/recommend.vue'
import songList from '@/components/home/songList/songList.vue'
import station from '@/components/home/station/station.vue'
import ranking from '@/components/home/ranking/ranking.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  history: true,
  routes: [{
    path: '/home',
    name: 'home',
    component: home,
    children: [{
      path: '',
      component: home
    }, {
      path: '/home/recommend',
      component: recommend
    }, {
      path: '/home/songList',
      component: songList
    }, {
      path: '/home/station',
      component: station
    }, {
      path: '/home/ranking',
      component: ranking
    }]
  }, {
    path: '/list',
    name: 'list',
    component: list
  }, {
    path: '/friend',
    name: 'friend',
    component: friend
  }]
})
