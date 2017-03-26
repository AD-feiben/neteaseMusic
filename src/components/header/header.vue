<template>
<div id="myHeader">
  <div id="menu">
    <i class="iconfont icon-caidan01"></i>
  </div>
  <div id="routers">
    <div>
      <router-link to="/home/recommend"><i class="iconfont icon-wangyiyunyinlezizhi-copy"></i></router-link>
    </div>
    <div>
      <router-link to="/list"><i class="iconfont icon-yinyue"></i></router-link>
    </div>
    <div>
      <router-link to="/friend"><i class="iconfont icon-pengyou"></i></router-link>
    </div>
  </div>
  <div id="search">
    <i class="iconfont icon-sousuo_sousuo"></i>
  </div>
</div>
</template>

<script>
export default {
  name: "myHeader"
}
</script>

<style type="less/text">
#myHeader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 1.5555555555555556rem;
  background: #CD3E3E;
  display: flex;
  justify-content: space-between;
}
#menu,#search {
  width: 1.5555555555555556rem;
  height: 100%;
  text-align: center;
  line-height: 1.5555555555555556rem;
}

#menu i,#search i{
  color: #fff;
}

#routers {
  width: 4.666666666666667rem;
  height: 100%;
  display: flex;
}
#routers div{
  flex: 1;
  text-align: center;
  line-height: 1.5555555555555556rem;
}
#routers div a{
  display: block;
  width: 100%;
  height: 100%;
  color: #e88889;
}
#routers div a.active{
  color: #fff;
}
#myHeader i{
  font-size: 0.6666666666666666rem;
}
</style>
