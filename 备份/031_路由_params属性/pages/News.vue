<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
        <!-- <RouterLink :to="{path:'/news/detail?a=哈哈&b=你好'}" >{{ news.title }}</RouterLink> -->
        <li v-for="news in newsList" :key="news.id" >
          <!-- 第一种写法 -->
          <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.id }}</RouterLink> -->
          <!-- 第二种 -->
           <!-- to对象写法 -->
           <RouterLink 
            :to="{
                // path:'/news/detail',
                // 只能用name
                name:'xiang',
                params:{
                  // 不能传对象和数组
                  id:news.id,
                  title:news.title,
                  content:news.content
                }
            }" 
           >
           {{ news.title }}
          </RouterLink>
        </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import { ref,reactive } from 'vue' 
  import { RouterView,RouterLink } from 'vue-router';
  const newsList = reactive([
    {id:'asd1',title:'抗癌食物',content:'西兰花'},
    {id:'asd2',title:'如何一夜暴富',content:'学it'},
    {id:'asd3',title:'震惊，万万没想到',content:'明天周一'},
    {id:'asd4',title:'好消息',content:'快过年了'}

  ])  

  
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}

.news li::marker{
  color: #64967E;
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>