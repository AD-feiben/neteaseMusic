<template>
<div id="app">
  <myHeader></myHeader>
  <div id="view">
    <router-view></router-view>
  </div>
  <myFooter></myFooter>
</div>
</template>

<script>
import myHeader from './components/header/header.vue'
import myFooter from './components/footer/footer.vue'
export default {
  name: 'app',
  components: {
    myHeader,
    myFooter
  },
  created: function (){
    if(window.location.hash === '#/'){
      this.$router.push('home');
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
}

ul,ol,li{
  list-style: none;
}
a{
  text-decoration: none;
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
