<template>
  <div class="pos clearfloat">
    <div class="cashierLeft">
        123
    </div>
    <div class="cashierRight">

    </div>
  </div>
</template>

<script>
export default {
  name: 'pos',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .pos{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .cashierLeft{
      width: 30%;
      height: 100%;
      float: left;
      box-sizing: border-box;
      background: #F9FAFC;
      border-right: 1px solid #C0CCDA;
    }
    .cashierRight{
      width: 70%;
      height: 100%;
      float: right;
    }
</style>
