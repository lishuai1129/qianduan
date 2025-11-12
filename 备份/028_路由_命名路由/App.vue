<template>
  <div class="app">
    <Header/>
    <!-- 导航区 -->
     <div class="navigate">
       <!-- to的两种写法  姓名跳转 对象跳转 -->
      <RouterLink to="/home" active-class="lzs">首页</RouterLink>
      <RouterLink :to="{name:'xinwen'}" active-class="lzs">新闻</RouterLink>
      <RouterLink :to="{path:'/about'}" active-class="lzs">关于</RouterLink>  
     </div>
     <div class="main-content">
      <RouterView></RouterView>
     </div>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterView,RouterLink } from 'vue-router';  
import Header from './components/Header.vue';

</script>

<style scoped>
   /* App */

  .navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
  }
  .navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
  }
  .navigate a.lzs {
    background-color: #64967E;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 微软雅黑;
  }
  .main-content {
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
  }
</style>
