<template lang="html">
<div id="friend">
  <div id="subRouters">
    <div><router-link to="/dynamic">动态</router-link></div>
    <div><router-link to="/nearby">附近</router-link></div>
    <div><router-link to="/friends">好友</router-link></div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'friend',
  data(){
    return {}
  }
}
</script>

<style lang="css">
</style>
