<template lang="html">
<div id="home">
  <div id="subRouters">
    <div><router-link to="/recommend">个性推荐</router-link></div>
    <div><router-link to="/songList">歌单</router-link></div>
    <div><router-link to="/station">主播电台</router-link></div>
    <div><router-link to="/ranking">排行榜</router-link></div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'home',
  created: function(){
    if(window.location.hash === "#/home"){
      // this.$router.push('home/recommend');
    }
  }
}
</script>

<style lang="css">
#subRouters{
  display: flex;
  width: 100%;
  height: 1.1111111111111112rem;
  background: #fbfdfc;
}

#subRouters div{
  flex: 1;
  height: 100%;
}

#subRouters div a{
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 0.3888888888888889rem;
  color: #686868;
  border-bottom: 0.05555555555555555rem solid transparent;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
#subRouters div a.active{
  border-bottom: 0.05555555555555555rem solid  #ce3a3a;
  color: #ce3a3a;
}

</style>
