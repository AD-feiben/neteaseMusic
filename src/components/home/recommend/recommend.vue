<template lang="html">
  <div id="recommend">
    <div id="banner" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner of banners">
          <a :href="banner.href">
            <img :src="banner.imgUrl">
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <div id="rcmMenu">
      <a href="javascript:;">
        <i class="iconfont icon-shouyinji01"></i>
        <p>私人FM</p>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-icon-test17"></i>
        <p>每月歌曲推荐</p>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-paixingbang2"></i>
        <p>云音乐热歌榜</p>
      </a>
    </div>

    <div id="songList">

      <div class="title">
        <div class="flexbox">
          <i class="iconfont icon-wancheng"></i>
          <p>推荐歌单</p>
        </div>
        <div>
          <a href="javascript:;" class="flexbox more">
            <p>更多</p>
            <i class="iconfont icon-gengduo"></i>
          </a>
        </div>
      </div>

      <div id="content">
        <div class="list" v-for='list of lists'>
          <a :href="list.href">
            <img :src="list.img">
            <p class="num">
              <i class='iconfont icon-erjiline'></i>
              <span v-html="list.num>10000 ? parseInt(list.num/10000) + '万': list.num"></span>
            </p>
            <p class="des" v-html="list.title"></p>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
export default {
  name: 'recommend',
  data() {
    return {
      banners: '',
      lists: ''
    }
  },
  created: function() {
    if (!this.banners) {
      axios.get('./static/data.json')
        .then((res) => {
          this.lists = res.data.lists;
          this.banners = res.data.banners;
          setTimeout(function() {
            new Swiper("#banner", {
              autoplay: 3000,
              loop: true,
              autoplayDisableOnInteraction: false,
              // 如果需要分页器
              pagination: '.swiper-pagination',
              paginationClickable: true,
              observer: true,
              observeParents: true
            })
          }, 50);

        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

}
</script>

<style lang="css">

#banner img{
  width: 100%;
}

#rcmMenu{
  display: flex;
  width: 100%;
  height: 2.986111111111111rem;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #dde1e0;
}

#rcmMenu a{
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
}

#rcmMenu a i{
  display: inline-flex;
  width: 1.4444444444444444rem;
  height: 1.4444444444444444rem;
  justify-content: center;
  align-items: center;
  font-size: 0.6944444444444444rem;
  color: #c83838;
  box-sizing: border-box;
  border: 1px solid #c83838;
  border-radius: 50%;
  margin-top: 0.5555555555555556rem;
  margin-bottom: 0.2777777777777778rem;
}
#rcmMenu a p{
  color: #303030;
  font-size: 0.2777777777777778rem;
}

#songList{
  width: 94.44444%;
  margin: 0 auto;
}

#songList .title{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 0.9722222222222222rem;
}

#songList .title .flexbox{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 0.3888888888888889rem;
}

#songList .title .flexbox i{
  color: #cf3638;
  margin-right: 0.16666666666666666rem;
}

#songList .title .more{
  font-size: 0.3055555555555556rem;
  color: #636564;
}
#songList .title .more i{
  margin-left: -0.1388888888888889rem;
  color: #636564;
}

#content{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
#content .list{
  width: 30%;
  margin-bottom: 0.5555555555555556rem;
}

#content .list a{
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}

#content .list a img{
  width: 100%;
}

#content .list a .num{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0.5rem;
  text-align: right;
  font-size: 0.2777777777777778rem;
  color: #fff;
  background: linear-gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5));
}

#content .list a .des{
  font-size: 0.333rem;
  color: #313131;
  line-height: 0.486rem;
  margin-top: 0.15rem;
  height: 0.972rem;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
