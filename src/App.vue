<template>
<div id="app">
  <!-- v-on:searching 监听子件触发的 searching 事件-->
  <myHeader v-on:searching='showSearch'></myHeader>
  <div id="view">
    <!-- 路由显示的窗口,相当于 angular 的 ng-view -->
    <router-view></router-view>
  </div>
  <myFooter v-bind:audios='audios' v-bind:index='index'></myFooter>
  <mySearch v-show='searching' v-on:back="hideSearch" v-on:changeSong="changeSong" v-on:searchSuccess='searchSuccess'></mySearch>
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
  data() {
    return {
      searching: false,
      index: 0,
      audios: [{
        "id": 287035,
        "name": "遇见",
        "artists": [{
          "id": 9272,
          "name": "孙燕姿",
          "picUrl": null
        }],
        "album": {
          "id": 28519,
          "name": "经典全纪录(主打精华版)",
          "artist": {
            "id": 0,
            "name": "",
            "picUrl": null
          },
          "picUrl": "http://p1.music.126.net/ZpcOx5dbNTRK94vSIM20PQ==/768558627827568.jpg"
        },
        "audio": "http://m2.music.126.net/bHhkaFisfPzs54I9N86Org==/3346913395008661.mp3",
        "djProgramId": 0,
        "page": "http://music.163.com/m/song/287035"
      }]
    }
  },
  methods: {
    // 接收到子件触发的 searching 事件的时候执行的函数
    showSearch: function() {
      console.log('接收到子件的消息');
      this.searching = true;
    },
    hideSearch: function() {
      this.searching = false;
    },
    searchSuccess: function(audios) {
      this.audios = audios;
      console.log("========================");
      console.log(this.audios);
    },
    changeSong: function(index) {
      this.index = index;
    }
  },
  // 注册每一个组件,这样才能在 template 中使用
  components: {
    myHeader,
    myFooter,
    mySearch
  },
  // 当前组件被创建的时候会调用的函数
  created: function() {
    if (window.location.hash === '#/') {
      this.$router.push('recommend');
    }
  }
}
</script>

<style>
body,
html,
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li {
  margin: 0;
  padding: 0
}

body,
html {
  height: 100%;
  background: #eff3f2;
}

ul,
ol,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  vertical-align: top;
}

input {
  outline: none;
  border: none;
}

::-webkit-scrollbar {
  width: 0px
}

body,
#app {
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
