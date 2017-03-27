<template>
<div id="app">
  <!-- v-on:searching 监听子件触发的 searching 事件-->
  <myHeader  v-on:searching='showSearch'></myHeader>
  <div id="view">
    <!-- 路由显示的窗口,相当于 angular 的 ng-view -->
    <router-view></router-view>
  </div>
  <myFooter></myFooter>
  <mySearch v-show='searching' v-on:back="hideSearch"></mySearch>
</div>
</template>

<script>
// 导入需要用到的组件
import myHeader from './components/header/header.vue'
import myFooter from './components/footer/footer.vue'
import mySearch from './components/search/search.vue'
// 导出 app 组件 在 main.js 入口文件使用
export default {
  name: 'app',
  data(){
    return {
      searching: false
    }
  },
  methods: {
    // 接收到子件触发的 searching 事件的时候执行的函数
    showSearch: function(){
      console.log('接收到子件的消息');
      this.searching = true;
    },
    hideSearch: function(){
      this.searching = false;
    }
  },
  // 注册每一个组件,这样才能在 template 中使用
  components: {
    myHeader,
    myFooter,
    mySearch
  },
  // 当前组件被创建的时候会调用的函数
  created: function (){
    if(window.location.hash === '#/'){
      this.$router.push('recommend');
    }
  }
}
</script>

<style>
body,html,p,h1,h2,h3,h4,h5,h6,ul,ol,li {
  margin: 0;
  padding: 0
}

body,html {
  height: 100%;
  background: #eff3f2;
}

ul,ol,li{
  list-style: none;
}
a{
  text-decoration: none;
}
img{
  vertical-align: top;
}
input{
  outline: none;
  border: none;
}

::-webkit-scrollbar{width:0px}

body,#app {
  height: 100%;
  min-width: 320px;
  max-width: 720px;
  margin: 0 auto;
  position: relative;
}

#view {
  position: absolute;
  top: 1.5555555555555556rem;
  bottom: 1.3611111111111112rem;
  left: 0;
  right: 0;
  overflow-y: auto;
}
</style>
