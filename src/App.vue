<template>
  <div id="app">
    <leftNav></leftNav>
    <div class="mainer">
      <transition name="fade" mode="out-in">
        <router-view/> 
      </transition>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'

export default {
  name: 'App',
  components:{
    leftNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 1280px;
  min-height: 400px;
}
.mainer{
  position: absolute;
  top: 0;
  left: 80px;
  right: 0;
  bottom: 0;
}
.fade-enter{
  opacity:0;
}
.fade-enter-active{
  transition:opacity .3s;
}
.fade-leave{
  opacity:1;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .3s;
}
</style>
