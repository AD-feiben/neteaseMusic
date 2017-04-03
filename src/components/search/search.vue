<template lang="html">
<div id="searchPage">
  <div id="searchHeader">
    <div id="return" v-on:click='goback'>
      <i class="iconfont icon-xiangzuo"></i>
    </div>
    <div id="input">
      <input type="text" placeholder="搜索音乐、歌手、歌词、用户" v-model="searchInput" v-on:blur='bluring' v-on:focus="focuing">
      <div class="icon" v-on:click='searchBtn'>
        <i class="iconfont icon-sousuo_sousuo" v-show="isfocu"></i>
      </div>
    </div>
  </div>
  <div id="searchContent">
    <div id="classify">
      <i class="iconfont icon-geshou"></i>
      <span>歌手分类</span>
      <i class='iconfont icon-gengduo'></i>
    </div>

    <ul id="searchResult" v-show="searchResult">
      <li v-for='(item, index) in searchResult' v-on:click="singNewSong(index)">
        <div class="album"><img v-bind:src="item.album.picUrl"></div>
        <div class="songContent">
          <p class="songName" v-html="item.name"></p>
          <p class="artists">
            <span v-for="artist in item.artists" v-html="artist.name"></span>
          </p>
          <p class="albumName" v-html="item.album.name"></p>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'searchPage',
  data() {
    return {
      isfocu: true,
      searchInput: '',
      searchResult: ''
    }
  },
  methods: {
    goback: function() {
      console.log('back');
      this.$emit('back');
    },
    focuing: function(){
      this.isfocu = true
    },
    bluring: function(){
      this.isfocu = false
    },
    searchBtn: function(){
      this.isfocu = true;
      if(this.searchInput){
        axios.get(`http://ycmusic.applinzi.com/search.php?s=${this.searchInput}&type=1&limit=100`)
        .then((res) => {
          this.searchResult = res.data.result.songs;
          this.$emit('searchSuccess', this.searchResult);
        })
        .catch((err) => {
          console.log(err);
        })
      }
    },
    singNewSong: function(index){
      this.$emit('changeSong', index);
    }
  }
}
</script>

<style lang="css">
#searchPage{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 1.35rem;
  z-index: 100;
}
#searchHeader{
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 1.5555555555555556rem;
  background: #cd3d3d;
  align-items: center;
}

#return{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5555555555555556rem;
  height: 1.5555555555555556rem;
  margin-right: 0.2222222222222222rem;
}

#return i{
  color: #fff;
  font-size: 0.5555555555555556rem;
}

#input{
  flex: 1;
  height: 1.3333333333333333rem;
  margin-right: 0.2222222222222222rem;
  box-sizing: border-box;
  border-bottom: 2px solid #fff;
  display: flex;
  align-items: center;
  position: relative;
}
#input input{
  flex: 1;
  height: 0.5555555555555556rem;
  font-size: 0.4166666666666667rem;
  margin-left: 0.25rem;
  background: transparent;
  color: #fff;
}

::-webkit-input-placeholder{
  color: rgba(255,255,255,0.5);
}
#input .icon{
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.6111111111111112rem;
  height: 100%;
  z-index: 10;
}
#input .icon i{
  font-size: 0.5833333333333334rem;
  color: #fff;
}
#searchContent{
  position: absolute;
  top: 1.5555555555555556rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f0f4f3;
}

#classify{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94.444%;
  height: 1.2222222222222223rem;
  box-sizing: border-box;
  border: 1px solid #d0d4d7;
  border-radius: 2px;
  margin: 0.3888888888888889rem auto 0.4166666666666667rem;

  font-size: 0.4166666666666667rem;
  color: #656565;
  vertical-align: top;
}

.icon-geshou{
  font-size: 0.5555555555555556rem;
  margin-right: 0.25rem;
}

.icon-gengduo{
  margin-top: 0.1111111111111111rem;
}

#searchResult{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  padding: 0 0.1388888888888889rem;
  background: #f0f4f3;
  overflow-y: auto;
}

#searchResult li{
  height: 1.6666666666666667rem;
  border-bottom: 1px solid #999;
  padding: 0.1388888888888889rem;
  display: flex;
}

#searchResult li .album{
  width: 1.6666666666666667rem;
  height: 1.6666666666666667rem;
}

#searchResult li .album img{
  width: 100%;
  height: 100%;
}

#searchResult li .songContent{
  flex: 1;
  padding-left: 0.2777777777777778rem;
  font-size: 0.16666666666666666rem;
}

.songName{
  font-size: 0.2777777777777778rem;
}

.artists{
  margin: 0.06944444444444445rem 0;
  color: #666;
}

.albumName{
  color: #666;
}

</style>
