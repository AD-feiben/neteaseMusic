<template lang="html">
  <div id="footer">
    <img :src="currentAudio.album.picUrl" :alt="currentAudio.album.name">

    <div id="songInfo">
      <p id="songName" v-text="currentAudio.name"></p>
      <p id="artist">
        <span v-for='art in currentAudio.artists' v-text="art.name"></span>
      </p>
    </div>

    <div id="controller">
      <div class="menu">
        <i class="iconfont icon-fudai"></i>
      </div>
      <div class="play" @click="playSong(this)">
        <audio id="myAudio"  type="audio/mpeg" preload="auto">
          不支持
        </audio>
        <i class="iconfont icon-bofang" v-show="!isPlay"></i>
        <i class="iconfont icon-zanting" v-show="isPlay"></i>
      </div>
      <div class="next">
        <i class="iconfont icon-nextvideo-copy"></i>
      </div>
    </div>

    <div id="progress" :style='{width: progress}'></div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  props: ['currentAudio', 'pause'],
  data() {
    return {
      isPlay: !this.pause(),
      audio: '',
      progress: '0%',
      intervalId: ''
    }
  },
  methods: {
    playSong: function(obj) {
      if (!this.audio) {
        this.audio = document.getElementById('myAudio');
      }
      this.audio.src = this.currentAudio.audio;
      if (this.isPlay) {
        this.audio.pause();
        window.clearInterval(this.intervalId);
        this.isPlay = false;
      } else {
        this.audio.play();
        this.intervalId = setInterval(() => {
          this.progress = (this.audio.currentTime / this.audio.duration) * 100 + "%";
          if (this.progress === '100%') {
            window.clearInterval(this.intervalId);
            this.isPlay = false;
            this.progress = '0%';
          }
        }, 500);
        this.isPlay = true;
      }
    }
  }
}
</script>

<style lang="css">
#footer{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.3611111111111112rem;
  background: rgba(255,255,255,0.8);
}

#footer img{
  position: absolute;
  top: 0.125rem;
  left: 0.20833333333333334rem;
  width: 1.125rem;
  height: 1.125rem;
}

#songInfo{
  position: absolute;
  top: 0.2638888888888889rem;
  left: 1.5416666666666667rem;
}

#songInfo #songName{
  color: #2b2b2b;
  font-size: 0.3888888888888889rem;
  /*margin-bottom: 0.1388888888888889rem;*/
}

#songInfo #artist{
  font-size: 0.3055555555555556rem;
  color: #959595;
}

#controller{
  position: absolute;
  top: 0;
  right: 0;
  width: 3.611111111111111rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

#controller i{
  color: #cc3c3c;
}
#controller div{
  display: flex;
  align-items: center;
  justify-content: center;
}

#controller div i{
  font-size: 0.4722222222222222rem;
}

#controller .menu, #controller .next{
  width: 1.1111111111111112rem;
  height: 100%;
}
#controller .play{
  width: 1.3888888888888888rem;
  height: 100%;
}

#controller .play i{
  font-size: 0.8333333333333334rem;
}

#progress{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.05555555555555555rem;
  background: #cd3b3c;
}

</style>
