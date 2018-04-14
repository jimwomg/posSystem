<template>
    <div class="leftNav f_left">
        <ul class="leftNav_list">
            <li v-for="(item,index) in leftNav" :key="item.id" :class="{'active':index == mainMuenActiveIndex}"  @click="selectMainMuen(index)">
                <router-link :to="item.routerTo" >
                    <i class="icon iconfont" :class="item.iconClass"></i>
                    <h1>{{item.iconName}}</h1>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import LeftNavData from '@/assets/profile/leftNav'

export default {
    data(){
        return {
            leftNav:LeftNavData,
            mainMuenActiveIndex:0
        }
    },    
    methods:{
        selectMainMuen(index){
            if(this.mainMuenActiveIndex == index) return;
            this.mainMuenActiveIndex = index;
        }
    }        
    
}
</script>

<style>
    .leftNav{
        background: #1D8CE0;
        color: #fff;
        font-size: 10px;
        height: 100%;
        width: 80px;
    }
    .leftNav_list li{
        border-bottom: 1px solid #20a0ff;
        cursor: pointer;
        z-index: 99;
    }
    .leftNav_list li a{
        display: block;
        color: #fff;
        padding: 10px 0 6px 0;
    }
    .leftNav_list li i.icon{
        font-size: 24px
    }
    .leftNav_list li h1{
        font-weight: normal;
        height: 20px;
        font-size: 10px;
        margin-top: 0px;
    }
    .leftNav_list li:hover{
        background: rgba(11, 98, 212, 0.3);
    }
    .leftNav_list li.active{
        background: rgba(11, 90, 194, 0.7);
        border-left: 1px solid #20a0ff;
        border-radius: 2px;
        position: relative;
        left: 1px;
        box-shadow: -1px 2px 2px rgb(11, 98, 212);
    }
    .leftNav_list li.active h1{
        font-weight: bold;
    }
</style>

