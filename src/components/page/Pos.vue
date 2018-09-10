<template>
  <div class="pos clearfloat">
    <div class="cashierLeft">
        456
        <p>名字：{{name}}</p>
    </div>
    <div class="cashierRight">

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'pos',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:''
    }
  },
  beforeCreate() {
    let _this = this;
    axios({
      method:'get',
      url:'/api/news/get',
      params:{
        num:'40',
        appkey: 'dd5d4db0ce75aa07'
      }
    })
    .then(function(res){
      console.log(res);
      
    })
    .catch(function(err){
      console.log(err);
    })
  },
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
